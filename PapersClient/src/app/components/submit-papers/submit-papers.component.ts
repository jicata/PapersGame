import { Component, OnInit } from "@angular/core";
import { PaperComponent } from "../paper/paper.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-submit-papers",
  templateUrl: "./submit-papers.component.html",
  styleUrls: ["./submit-papers.component.scss"]
})
export class SubmitPapersComponent implements OnInit {
  form: FormGroup;
  papers: PaperComponent[];
  errorMessage: string;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      paperOne: ['', [Validators.required, Validators.minLength(2)]],
      paperTwo: ['', [Validators.required]],
      paperThree: ['', [Validators.required]],
      paperFour: ['', [Validators.required]],
      paperFive: ['', [Validators.required]]
    });
  }

  getBackgroundColor() {
    return this.submitted && this.form.invalid ? 'red' : 'none';
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.papers = [];
    this.errorMessage = 'All fields are required';
  }

  submit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    console.log(this.form);
  }
}
