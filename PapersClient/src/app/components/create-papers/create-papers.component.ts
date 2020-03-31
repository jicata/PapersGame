import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { CONSTANTS } from "../../constants/constants";

import { Paper } from "src/app/models/paperModel";
import { CreatePapersService } from "src/app/services/create-papers/create-papers.service";
import { RxwebValidators } from "@rxweb/reactive-form-validators";
import { Router } from "@angular/router";
import { PlaygroundSignalRService } from "src/app/services/signalr/playground-signalr.service";

@Component({
  selector: "app-create-papers",
  templateUrl: "./create-papers.component.html",
  styleUrls: ["./create-papers.component.scss"]
})
export class CreatePapersComponent implements OnInit {
  form: FormGroup;
  paperInputs: object;
  submitted = false;
  gameSessionId: string = 'basi_kura';

  constructor(
    private formBuilder: FormBuilder,
    private createPapersService: CreatePapersService,
    private router: Router,
    private playgroundSignalRService: PlaygroundSignalRService
  ) {
    this.form = this.formBuilder.group({
      papers: this.formBuilder.array([
        ...this.createPaperFormControls(CONSTANTS.DEFAULT_NUMBER_OF_PAPERS)
      ])
    });
  }

  addErrorCssClass(paperIndex: string) {
    const touchedControl = this.getControls()[paperIndex].get("paper");

    return touchedControl &&
      touchedControl.value &&
      touchedControl.invalid &&
      touchedControl.dirty
      ? CONSTANTS.VALIDATION_ERROR_CSS_CLASS
      : "";
  }

  getControls() {
    return (this.form.get("papers") as FormArray).controls;
  }

  ngOnInit(): void {
  }

  createPaperFormControls(papersCount) {
    const controls = [];

    for (let i = 0; i < papersCount; i++) {
      const control = this.formBuilder.group({
        paper: [
          "",
          [
            Validators.required,
            Validators.minLength(3),
            RxwebValidators.unique(),
            Validators.pattern("^[А-Яа-я0-9]{3,}$")
          ]
        ]
      });

      controls.push(control);
    }
    return controls;
  }

  submit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const values = this.form.get("papers").value;

    const paperModels = Object.keys(values).map(k =>
      Object.assign(new Paper(), { word: values[k]["paper"] })
    );

    this.createPapersService.createPapers(paperModels).subscribe(data => {
      this.playgroundSignalRService
        .joinOrCreatePlayground(this.gameSessionId);
      this.router.navigate(["/playground"]);
    });
  }
}
