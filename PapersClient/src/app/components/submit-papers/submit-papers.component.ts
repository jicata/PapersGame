import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { Constants        } from '../../constants/constants';

import { Paper } from "src/app/models/paperModel";
import { CreatePapersService } from "src/app/services/create-papers.service";
import { RxwebValidators } from "@rxweb/reactive-form-validators";

@Component({
  selector: "app-submit-papers",
  templateUrl: "./submit-papers.component.html",
  styleUrls: ["./submit-papers.component.scss"]
})
export class SubmitPapersComponent implements OnInit {
  form: FormGroup;
  paperInputs: object;
  errorMessage: string;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private createPapersService: CreatePapersService
  ) {
    this.form = this.formBuilder.group({
      papers: this.formBuilder.array([...this.createPaperFormControls(Constants.DEFAULT_NUMBER_OF_PAPERS)])
    });
  }

  addErrorCssClass(paperIndex: string) {
    const touchedControl = this.getControls()[paperIndex].get('paper');
    console.log(this.form.invalid);

    return touchedControl &&
    (touchedControl.value) &&
    touchedControl.invalid &&
    touchedControl.dirty
      ? Constants.VALIDATION_ERROR_CSS_CLASS
      : '';
  }

  get f() {
    return this.form.controls;
  }

  getControls() {
    return (this.form.get('papers') as FormArray).controls;
  }

  ngOnInit(): void {
    this.createPapersService.getPapers().subscribe(data => console.log(data));
    this.errorMessage = "All fields are required";
  }

  createPaperFormControls(papersCount) {
    const controls = [];

    for (let i = 0; i < papersCount; i++) {
      const control = this.formBuilder.group(
        { paper: ['', [
          Validators.required,
          Validators.minLength(3),
          RxwebValidators.unique(),
            Validators.pattern('^[А-Яа-я0-9]{3,}$')
          ]] });

      controls.push(control);
    }
    return controls;
  }

  submit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    return;

    const values = this.form.value;

    const paperModels = Object.keys(values).map(k =>
      Object.assign(new Paper(), { word: values[k] })
    );

    this.createPapersService.createPapers(paperModels).subscribe(data => {
      console.log(data);
    });
  }
}
