import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Tarefa } from './to-do-list.types';
import { ToDoListService } from './to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [InputTextModule,FormsModule,FloatLabelModule,ButtonModule,TableModule,CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent implements OnInit{
  constructor(private toDoListService:ToDoListService){}

  titulo:string|undefined;
  descricao:string|undefined;
  tarefas:Tarefa[]=[];

  ngOnInit(): void {
    this.tarefas = this.toDoListService.obtertarefas();
  }

  cadastrarTarefas():void{
    if (this.descricao && this.titulo) {
      const novaTarefa: Tarefa = {
        titulo: this.titulo,
        descricao: this.descricao
      };
      this.toDoListService.adicionarTarefa(novaTarefa);
      this.titulo = undefined;
      this.descricao = undefined;
    }
  }
excluirTarefa(titulo: string){
    this.toDoListService.excluirTarefa(titulo);
    this.tarefas = this.toDoListService.obtertarefas();
  }
}
