import { Component } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
})
export class DataBindingComponent {
  public contadorClique: number = 0;
  public urlImagem: string = "../assets/angular.png";
  public nome: string = "";
  public info: string = "info";

  adicionarClique() {
    this.contadorClique += 1;
  }

  zerarContador() {
    this.contadorClique = 0;
  }

  darFeedback() {
    if (this.info != "info") {
      this.info = "info";
      return;
    }
    if (this.info == "info") {
      this.info = "Você Clicou na Info!";
    }
  }
}
