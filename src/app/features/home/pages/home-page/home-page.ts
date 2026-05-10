import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Leadership } from '../../components/leadership/leadership';
import { Achievements } from '../../components/achievements/achievements';
import { Programs } from '../../components/programs/programs';
import { Facilities } from '../../components/facilities/facilities';
import { CampusLife } from '../../components/campus-life/campus-life';
import { Seminars } from '../../components/seminars/seminars';
import { FreshersParty } from '../../components/freshers-party/freshers-party';
import { Gallery } from '../../components/gallery/gallery';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Hero, Leadership, Achievements, Programs, Facilities, CampusLife, Seminars, FreshersParty, Gallery],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage { }
