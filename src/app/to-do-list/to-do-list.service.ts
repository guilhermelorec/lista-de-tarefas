import { Injectable } from '@angular/core';
import { Tarefa } from './to-do-list.types';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  private tarefas:Tarefa[]=[];
  constructor() { }

  adicionarTarefa(tarefa: Tarefa) {
    this.tarefas.push(tarefa);
    localStorage.setItem('tarefas',JSON.stringify(this.tarefas))
  }
  obtertarefas():Tarefa[] {
    const tarefas = localStorage.getItem('tarefas');
    if (tarefas) {
      this.tarefas = JSON.parse(tarefas)
    }
    return this.tarefas;
  }
  excluirTarefa(titulo:string): void{
    this.tarefas = this.tarefas.filter(tarefas => tarefas.titulo !== titulo);
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas))
  }

}

