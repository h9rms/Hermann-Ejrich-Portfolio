import { Component, isDevMode } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';
import { SectionDots } from '../../shared/section-dots/section-dots';

type SendStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, ReactiveFormsModule, Footer, Header, SectionDots],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  form: FormGroup;
  status: SendStatus = 'idle';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i)]],
      message: ['', [Validators.required, Validators.minLength(4)]],
      privacy: [false, Validators.requiredTrue],
    });
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get message() {
    return this.form.get('message');
  }

  get privacy() {
    return this.form.get('privacy');
  }

  get nameError(): boolean {
    return !!this.name?.touched && !!this.name?.invalid;
  }

  get emailError(): boolean {
    return !!this.email?.touched && !!this.email?.invalid;
  }

  get messageError(): boolean {
    return !!this.message?.touched && !!this.message?.invalid;
  }

  get privacyError(): boolean {
    return !!this.privacy?.touched && !!this.privacy?.invalid;
  }

  get emailHint(): string {
    if (this.email?.hasError('required')) {
      return 'Oops! your email is required';
    }
    return 'Oops! this email address looks wrong';
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid || this.status === 'sending') return;

    this.status = 'sending';

    if (isDevMode()) {
      setTimeout(() => this.finish(true), 800);
      return;
    }

    this.http
      .post<{ success: boolean }>('/sendMail.php', {
        name: this.name?.value,
        email: this.email?.value,
        message: this.message?.value,
      })
      .subscribe({
        next: (response) => this.finish(response.success),
        error: () => this.finish(false),
      });
  }

  private finish(success: boolean) {
    this.status = success ? 'success' : 'error';
    if (success) {
      this.form.reset({ name: '', email: '', message: '', privacy: false });
    }
    setTimeout(() => (this.status = 'idle'), 6000);
  }
}