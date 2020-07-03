import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SepomexService } from 'src/app/admin/services/sepomex.service';
import { AreasService } from 'src/app/admin/services/areas.service';
import { OrganizationService } from '../services/organization.service';
import { RubrosService } from 'src/app/admin/services/rubros.service';
import { Router } from '@angular/router';

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
  formIntegrantes: FormGroup;
  formContactos: FormGroup;
  colonias = []
  areas = []
  rubros = []
  listaIntegrantes = []
  listaContactos = []
  listaAreasAccion = []
  listaRubros = []
  displayedColumns: string[] = ['nombre', 'puesto', 'correo', 'borrar'];
  generos = ['Hombre', 'Mujer', 'Otro']

  constructor(
    private fb: FormBuilder,
    private sepomexService: SepomexService,
    private areasService: AreasService,
    private rubrosService: RubrosService,
    private router: Router,
    private service: OrganizationService
    ) { }

  ngOnInit(): void {
    this.getAreas();
    this.getRubros();

    this.form1 = this.fb.group({
      organizacion: new FormControl('', [Validators.required]),
      web: new FormControl(''),
      mision: new FormControl(''),
      descripcion: new FormControl(''),
      objetivo: new FormControl(''),
      legionario: new FormControl(false)
    });

    this.form7 = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      genero: new FormControl(''),
      puesto: new FormControl(''),
      departamento: new FormControl(''),
      disponible: new FormControl(true),
      usuario: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(6)]),
      telefono: new FormControl(''),
      correo: new FormControl('', [Validators.required])
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
      areasDeAccionOtro: new FormControl('')
    });

    this.form4 = this.fb.group({
      ninos: new FormControl(0),
      ancianos: new FormControl(0),
      mujeres: new FormControl(0),
      discapacitados: new FormControl(0),
      jovenes: new FormControl(0),
      indigenas: new FormControl(0),
      otro: new FormControl(0),
      total: new FormControl(0)
    });

    this.form5 = this.fb.group({
      logros: new FormControl(''),
      reconocimiento: new FormControl(''),
    });

    this.form6 = this.fb.group({
      rubroOtro: new FormControl('')
    });

    this.formContactos = this.fb.group({
      nombre: new FormControl(''),
      prefijo: new FormControl(''),
      puesto: new FormControl(''),
      correo: new FormControl(''),
      telefono: new FormControl(''),
      extension: new FormControl(''),
      celular: new FormControl('')
    });

    this.formIntegrantes = this.fb.group({
      nombre: new FormControl('')
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

  getRubros(){
    this.rubrosService.getAll().subscribe((res: any[]) => {
      if(res.length){
        res.forEach(element => {
          let control = new FormControl('');
          this.form6.addControl("rubro"+element.id, control);
        });
        this.rubros = res;
      }
    })
  }

  create(){
    var list = [1,2,3,4]
    let model = {
      ...this.form1.value,
      ...this.form2.value,
      ...this.form4.value,
      ...this.form5.value
    }
    model.listaAreasAccion = this.listaAreasAccion.map(x=> {return {idAreaAccion: x.id}});
    model.listaRubros = this.listaRubros.map(x=> {return {idRubro: x.id}});
    model.listaContactos = this.listaContactos;
    model.rubroOtro = this.form6.value.rubroOtro;
    model.areasDeAccionOtro = this.form3.value.areasDeAccionOtro;
    model.responsable = this.form7.value;
    this.service.create(model).subscribe((res: any)=>{
      this.router.navigate(['organizations','home']);
    }, error=>{
      alert(error.error)
    })
  }

  toggleArea(checked, id){
    var area = this.areas.find(x=>x.id===id);
    if(checked) this.listaAreasAccion.push(area);
    else this.listaAreasAccion = this.listaAreasAccion.filter(item => item.id !== id);    
  }

  toggleRubro(checked, id){
    var rubro = this.rubros.find(x=>x.id===id);
    if(checked) this.listaRubros.push(rubro);
    else this.listaRubros = this.listaRubros.filter(item => item.id !== id);    
  }

  calculatePeople(){
      let sum = 0;
      let formValue = this.form4.value;
      sum = formValue.ninos + formValue.ancianos + 
            formValue.mujeres + formValue.discapacitados + 
            formValue.jovenes + formValue.indigenas + formValue.otro;
      this.form4.get("total").setValue(sum);
  }

  addIntegrante(){
    let value = this.formIntegrantes.value;
    this.listaIntegrantes.push(value);
    this.formIntegrantes.reset();
  }

  removeIntegrante(item){
    const index: number = this.listaIntegrantes.indexOf(item);
    if (index !== -1) {
        this.listaIntegrantes.splice(index, 1);
    } 
  }

  addContacto(){
    let value = this.formContactos.value;
    this.listaContactos.push(value);
    this.listaContactos = [...this.listaContactos]
    this.formContactos.reset();
  }

  removeContacto(item){
    const index: number = this.listaContactos.indexOf(item);
    if (index !== -1) {
        this.listaContactos.splice(index, 1);
    } 
  }

}
