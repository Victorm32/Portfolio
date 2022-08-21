export interface Persona {
    acercaDe:     string;
    direccion:    string;
    educacion:    Educacion[];
    experiencias: Experiencia[];
    id:           number;
    nombreYApellido:       string;
    password:     string;
    proyecto:     Proyecto[];
    puesto:       string;
    skill:        Skill[];
    user:         string;
   }
   
   export interface Educacion {
    carrera:     string;
    id:          number;
    institucion: string;
    urlFoto:     string;
   }
   
   export interface Experiencia {
    descripcion: string;
    id:          number;
    titulo:      string;
    urlFoto:     string;
   }
   
   export interface Skill {
    id:         number;
    lenguaje:   string;
    porcentaje: number;
   }

   export interface Proyecto {
    descripcion: string;
    id:          number;
    titulo:      string;
    urlProyecto:     string;
   }


   