import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SepomexService } from 'src/app/admin/services/sepomex.service';
import { AreasService } from 'src/app/admin/services/areas.service';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-organization-add',
  templateUrl: './organization-add.component.html',
  styleUrls: ['./organization-add.component.scss']
})
export class OrganizationAddComponent implements OnInit {
  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  form4: FormGroup;
  form5: FormGroup;
  form6: FormGroup;
  form7: FormGroup;
  colonias = []
  areas = []

  constructor(
    private fb: FormBuilder,
    private sepomexService: SepomexService,
    private areasService: AreasService,
    private service: OrganizationService
    ) { }

  ngOnInit(): void {
    this.getAreas();

    this.form1 = this.fb.group({
      organizacion: new FormControl('', [Validators.required]),
      responsable: new FormControl('', [Validators.required]),
      web: new FormControl(''),
      mision: new FormControl(''),
      descripcion: new FormControl(''),
      objetivo: new FormControl(''),
      legionario: new FormControl('')
    });

    this.form2 = this.fb.group({
      calle: new FormControl(''),
      colonia: new FormControl(''),
      estado: new FormControl(''),
      cp: new FormControl(''),
      ciudad: new FormControl(''),
      municipio: new FormControl(''),
      pais: new FormControl('')
    });

    this.form3 = this.fb.group({
    });

    this.form4 = this.fb.group({
      ninos: new FormControl(''),
      ancianos: new FormControl(''),
      mujeres: new FormControl(''),
      discapacitados: new FormControl(''),
      jovenes: new FormControl(''),
      indigenas: new FormControl(''),
      otro: new FormControl(''),
      total: new FormControl('')
    });

    this.form5 = this.fb.group({
      logros: new FormControl(''),
      reconocimiento: new FormControl(''),
      junta: new FormControl('')
    });

    this.form6 = this.fb.group({
      dependencia: new FormControl(''),
      privada: new FormControl(''),
      anahuac: new FormControl(''),
      rse: new FormControl(''),
      asociacion: new FormControl(''),
      otro: new FormControl('')
    });

    this.form7 = this.fb.group({
      nombre: new FormControl(''),
      prefijo: new FormControl(''),
      puesto: new FormControl(''),
      correo: new FormControl(''),
      telefono: new FormControl(''),
      extension: new FormControl(''),
      celular: new FormControl('')
    });
  }

  searchCP(){
    var model = {
      cp: this.form2.get('cp').value
    }
    this.sepomexService.getFromCP(model).subscribe((res: any[])=>{
      if(res.length > 0){
        this.colonias = res;
        var first = res[0];
        this.form2.get('estado').setValue(first.estado);
        this.form2.get('ciudad').setValue(first.ciudad);
        this.form2.get('municipio').setValue(first.municipio);
        this.form2.get('colonia').setValue(first.colonia);
      }
    }, error =>{
    })
  }

  getAreas(){
    this.areasService.getAreas().subscribe((res: any[]) => {
      if(res.length){
        res.forEach(element => {
          let control = new FormControl('');
          this.form3.addControl("area"+element.id, control);
        });
        this.areas = res;
      }
    })
  }

  create(){
    var list = [1,2,3,4]
    let model = {
      ...this.form1.value,
      ...this.form2.value,
      ...this.form3.value,
      ...this.form4.value,
      ...this.form5.value,
      ...this.form6.value,
      ...this.form7.value,
      list: list
    }
    this.service.create(model).subscribe((res: any)=>{
      console.log(res.message)
    }, error=>{
      alert(error.error)
    })
  }

}
