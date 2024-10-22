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
