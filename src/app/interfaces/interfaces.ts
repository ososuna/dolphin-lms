
export interface Opcion {
    icon: string;
    name: string;
    redirectTo: string;
}

export interface Contenido {
    id: number;
    titulo: string;
    descripcion: string[];
    grado: string;
    img: string[];
}

export interface Publicacion {
    id: number;
    id_usuario: number;
    titulo: string;
    comentarios: string[];
}

export interface Grado {
    id: number;
    titulo: string;
    temas: string[];
}

export interface Materia {
    id: number;
    titulo: string;
    temas: string[];
}
