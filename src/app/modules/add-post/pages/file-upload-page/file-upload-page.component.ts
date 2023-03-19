import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-file-upload-page',
  templateUrl: './file-upload-page.component.html',
  styleUrls: ['./file-upload-page.component.css'],
})
export class FileUploadPageComponent {
  form: FormGroup = new FormGroup({});
  formElements = [
    {
      id: 'title',
      container_class: ['col-10', 'col-lg-6'],
      input: {
        class: ['form-control', 'text-center'],
        type: 'text',
        placeholder: 'Titulo',
      },
      label: {
        class: ['text-muted'],
        text: 'Titulo',
      },
    },
    {
      id: 'description',
      container_class: ['col-10', 'col-lg-6', 'mt-4'],
      textArea: {
        class: ['form-control', 'text-center'],
        placeholder: '********',
      },
      label: {
        class: ['text-muted'],
        text: 'Descripción',
      },
    },
    {
      id: 'date',
      container_class: ['col-10', 'col-lg-6', 'mt-4'],
      input: {
        class: ['form-control', 'text-center'],
        type: 'date',
        placeholder: 'Fecha de Publicación',
      },
      label: {
        class: ['text-muted'],
        text: 'Fecha de Publicación',
      },
    },
    {
      id: 'type',
      container_class: ['col-10', 'col-lg-6', 'mt-4'],
      input: {
        class: ['form-control', 'text-center'],
        type: 'text',
        placeholder: 'Tipo de Documento',
      },
      label: {
        class: ['text-muted'],
        text: 'Tipo de Documento',
      },
    },
    {
      id: 'file',
      container_class: ['col-10', 'col-lg-6', 'mt-4'],
      input: {
        class: ['form-control', 'text-center'],
        type: 'file',
        placeholder: 'File',
      },
      label: {
        class: ['text-muted'],
        text: 'Archivo',
      },
    },
  ];

  /**Método constructor */
  constructor(private _userService: UserService){

  }

  /**Método que se ejecuta al iniciar el componente */
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      file: new FormControl('', [Validators.required]),
    });
  }

  /**Función que envia los datos para ingresar */
  async sendPost() {
    if (this.form.valid) {
      const { title, description, date, type } = this.form.value;
      console.log(title, description, date, type);

      const body = new FormData();
      body.append('myFile', this.fileTmp.fileRaw, this.fileTmp.fileName);
      body.append('title', title);
      body.append('description', description);
      body.append('date', date);
      body.append('type', type);
      const {response} = await this._userService.uploadPost(body);
      if(response){
        this.form.reset();
      }
    }
  }
  private fileTmp: any;
  getFile($event: any): void {
    //TODO esto captura el archivo!
    const [file] = $event.target.files;
    this.fileTmp = {
      fileRaw: file,
      fileName: file.name,
    };
  }
}
