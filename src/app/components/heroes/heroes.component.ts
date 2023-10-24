import { Component } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HEROES } from 'src/app/mock-heroes';
import { HeroService } from 'src/app/hero.service';
import { MessageService } from 'src/app/message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  constructor(private heroService: HeroService, private messageService: MessageService){}
  ngOnInit(): void{
    this.getHeroes()
  }


  heroes: Hero[] = []


  getHeroes(): void{
      this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
    }

    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.heroService.addHero({ name } as Hero)
        .subscribe(hero => {
          this.heroes.push(hero);
        });
    }

    delete(hero: Hero): void {
      this.heroes = this.heroes.filter(h => h !== hero);
      this.heroService.deleteHero(hero.id).subscribe();
    }
  
}
