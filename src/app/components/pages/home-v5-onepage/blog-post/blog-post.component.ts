import { Component, OnInit } from '@angular/core';
import blogpost from '../../../../data/blog/blog.json';
import author from '../../../../data/team.json';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  constructor() { }
  public blogblock = blogpost;
  public getAuthor(items: string | any[]) {
    var elems = author.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  ngOnInit(): void {
  }

}
