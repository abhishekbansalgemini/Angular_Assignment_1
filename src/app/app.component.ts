import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Assignment_1';

  display_button_logs = 0;
  getParagraph() {
    if(this.display_button_logs % 2 === 0){
    const p_ele = document.getElementById("para");
    if(p_ele !== null)
    p_ele.textContent = "Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps. These Angular docs help you learn and use the Angular framework and development platform, from your first application to optimizing complex single - page applications for enterprises.Tutorials and guides include downloadable examples to help you start your projects.These docs assume that you are already familiar with HTML, CSS, JavaScript, and some of the tools from the latest standards, such as classes and modules.The code samples are written using TypeScript.Most Angular code can be written with just the latest JavaScript, using types for dependency injection, and using decorators for metadata."
    }
    else{
      const para_ele = document.getElementById("para");
    if(para_ele !== null)
    para_ele.textContent = ""
    }
    this.display_button_logs++;
    console.log("Number of times the button get clicked " + this.display_button_logs);
  }
  count = 0;
  getData(val: string) {
    const div_ele = document.getElementById("para_div");
    this.count++;
    if (this.count % 5 === 0 && this.count !== 0) {
      const para = document.createElement("span");
      para.innerHTML = "<br>" + val;
      div_ele?.appendChild(para);
      para.style.cssText = `background-color:blue`;
    }
    else {
      const para = document.createElement("span");
      para.innerHTML = "<br>" + val;
      div_ele?.appendChild(para);
    }
    

  }
}
