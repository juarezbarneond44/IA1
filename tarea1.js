function Limpieza(){
    var estado=1;
    if(Izquierda){ // se encuentra en la izquierda
        if(Suciedad[0]){//limpiar
            if(!Suciedad[1]){estado=3;}
            Suciedad[0]=false;
            document.getElementById(`log`).innerHTML+=`<br><FONT COLOR="green">Lugar: A |Accion: Limpiar</FONT>`
        }else{// esta limpio 
            if(Suciedad[1]){estado=5;}
            else{ estado=7;}
            document.getElementById(`log`).innerHTML+=`<br><FONT COLOR="blue">Lugar: A |Accion: Mover Derecha</FONT>`
            Izquierda=!Izquierda;
        }
         
    }
    else{ // se encuentra en la derecha
        if(Suciedad[1]){//limpiar
            estado=2;
            if(!Suciedad[0])
            estado=6;
            document.getElementById(`log`).innerHTML+=`<br><FONT COLOR="green">Lugar: B |Accion: Limpiar</FONT>`
            Suciedad[1]=false;
        }else{// esta limpio 
            if(Suciedad[0]){estado=4;} 
            else{ estado=8;}
            document.getElementById(`log`).innerHTML+=`<br><FONT COLOR="blue">Lugar: B |Accion: Mover Izquierda</FONT>`
            Izquierda=!Izquierda;
        }
    }
    
    Estados(estado);
}
function Estados(estado){
   var aux=contador[estado-1]+=1;
    document.getElementById(`estado${estado}`).innerHTML=aux
    Ensuciar();
    if(!Terminar()){
        setTimeout(function(){Limpieza();},250);
    }else{
        document.getElementById('terminado').innerHTML='Simulacion Terminada!!!'
    }
 
    
}
function Ensuciar(){
    var prob=Math.floor(Math.random() * 11);
    if(prob<2){Suciedad[0]=true;
        document.getElementById(`log`).innerHTML+=`<br><FONT COLOR="brown">Lugar: A |Accion: Ensuciar</FONT>`
    }
    if(prob<4&& 2<=prob){Suciedad[1]=true; document.getElementById(`log`).innerHTML+=`<br><FONT COLOR="brown"">Lugar: B |Accion: Ensuciar</FONT>`}
    if(prob==10){Suciedad[0]=true;Suciedad[1]=true;
        document.getElementById(`log`).innerHTML+=`<br><FONT COLOR="brown">Lugar: A y B |Accion: Ensuciar</FONT>`
    }
}
function Terminar(){
    for (let x = 0; x < 8; x++) {
        const element = contador[x];
        if(element<2){
            return false;
        } 
    }
    return true;
}
var contador=[];
for (let x = 0; x < 8; x++) {contador[x]=0;}
var Suciedad=[true,true];
var Izquierda=true;
Limpieza();