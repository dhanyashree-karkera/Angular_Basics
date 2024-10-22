 //Data Types --  string ,number , boolean, date, object, array, null, undefined

  firstName :string ='Angular';
  angularVersion="Version 18";

  version:number= 18;

  isActive :boolean=false;

  currentDate: Date=new Date();

  inputType:string= "button";
  selectedState:string='';

  showFunctionName(){
    alert('Angular 18');
  }

  showMessage(message:string){
    alert(message);
  }


// DataBinding
 
<!-- Interpolation -->
<div class="row">
    <div class="col-3">
        <p>{{firstName}}</p>
    </div>
    <div class="col-3">
        <p>{{angularVersion}}</p><p>{{version}}</p>
    </div>
    <div class="col-3">
        <p>{{isActive}}</p> 
    </div>
    <div class="col-3">
        <p>{{currentDate}}</p>
    </div>
    <div class="col-3">
        <p>{{selectedState}}</p>
    </div>
</div>

<!-- property binding -->
<div class="row">
    <div class="col-3">
        <input type="text" [value]="firstName" class="form-control"/>
    </div>
    <div class="col-3">
        <input [type]="inputType"/>
    </div>

    <!-- two way data binding -->
    <div class="col-3">
        <input type="text" [(ngModel)]="firstName" class="form-control"/>
    </div>
    <div class="col-3">
        <select [(ngModel)]="selectedState">
            <option value="A">Hyy</option>
            <option value="B">Byee</option>
            <option value="C">Tata</option>
        </select>
    </div>
</div>

<!-- event binding -->
<div class="row" style="margin-top: 2rem;">
    <div class="col-3">
        <button class="btn btn-success" (click)="showFunctionName()">Submit</button>
    </div>
    <div class="col-3">
        <button class="btn btn-danger" (click)="showMessage('welcome message')">Cancel</button>
    </div>
</div>

Directives ->
Attribute --	Used with a template. This type of directive is the most common directive type.
Attribute -- directives	Change the appearance or behavior of an element, component, or another directive.
Structural -- directives	Change the DOM layout by adding and removing DOM elements.

 <div class="row">
    <div class="col-12 text-center">
        <div class="btn-group">
            <button type="button" (click)="changeTab('Roles')" class="btn"[ngClass]="currentComponent=='Roles'?'btn-success':'btn-danger'" >Roles</button>
            <button type="button" (click)="changeTab('Designation')" class="btn"[ngClass]="currentComponent=='Designation'?'btn-success':'btn-danger'"  >Designation</button>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-12" *ngIf="currentComponent=='Roles'">
        <app-roles></app-roles>
    </div>
    <div class="col-12" *ngIf="currentComponent=='Designation'">
        <app-designation></app-designation>
    </div>



