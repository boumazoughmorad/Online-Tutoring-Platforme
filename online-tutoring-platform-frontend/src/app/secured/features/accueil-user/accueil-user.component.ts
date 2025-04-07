import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
interface Post {
  id: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: 'tutor' | 'student';
  };
  createdAt: Date;
  likes: number;
  comments: Comment[];
  isLiked: boolean;
}

interface Comment {
  id: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: 'tutor' | 'student';
  };
  createdAt: Date;
}
@Component({
  selector: 'app-accueil-user',
  imports: [NgIf,NgFor,DatePipe,ReactiveFormsModule],
  templateUrl: './accueil-user.component.html',
  styleUrl: './accueil-user.component.css'
})
export class AccueilUserComponent implements OnInit {
  postForm: FormGroup;
  posts: Post[] = [];
  currentUser: any;
  isLoading = true;

  constructor(
    private fb: FormBuilder,

  ) {
    this.currentUser = {
      name: 'Leila Zahraoui',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      role: 'student' as 'tutor' | 'student',
    };
    this.postForm = this.fb.group({
      content: ['', []]
      
    });
  }

  async ngOnInit() {

    await this.loadPosts();
    this.isLoading = false;
  }

  async loadPosts() {
    
      this.posts = [
        {
          id: 'post1',
          content: 'Here are 5 tricks to improve your pronunciation in English.',
          author: {
            name: 'James Carter',
            avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
            role: 'tutor',
          },
          createdAt: new Date('2025-04-01T09:00:00'),
          likes: 25,
          isLiked: true,
          comments: [
            {
              id: 'comment1',
              content: 'Thanks! This really helped.',
              author: {
                name: 'Fatima El Fassi',
                avatar: 'https://randomuser.me/api/portraits/women/34.jpg',
                role: 'student',
              },
              createdAt: new Date('2025-04-01T10:00:00'),
            },
            {
              id: 'comment2',
              content: 'Could you recommend any resources?',
              author: {
                name: 'Nabil Hamdouch',
                avatar: 'https://randomuser.me/api/portraits/women/54.jpg',
                role: 'student',
              },
              createdAt: new Date('2025-04-01T11:30:00'),
            }
          ]
        },
        {
          id: 'post2',
          content: 'Struggling with calculus? Let’s break it down together.',
          author: {
            name: 'Sara El Malki',
            avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
            role: 'tutor',
          },
          createdAt: new Date('2025-04-03T16:45:00'),
          likes: 40,
          isLiked: false,
          comments: [
            {
              id: 'comment3',
              content: 'Love this explanation!',
              author: {
                name: 'Youssef Tazi',
                avatar: 'https://randomuser.me/api/portraits/women/64.jpg',
                role: 'student',
              },
              createdAt: new Date('2025-04-03T18:00:00'),
            }
          ]
        }
      ];
  }

  createPost() {
    if (this.postForm.invalid || !this.postForm.value.content.trim()) return;

    const content = this.postForm.value.content;
 
        this.posts.unshift(content);
        this.postForm.reset();
 
  }

  likePost(postId: string) {
    
        const index = this.posts.findIndex(p => p.id === postId);
        if (index !== -1) {
          this.posts[index].likes +=1 ;
        }
      
      
  }

  addComment(postId: string, content: string) {
    if (!content.trim()) return;

    
        const index = this.posts.findIndex(p => p.id === postId);
        if (index !== -1) {
          this.posts[index].comments.push( {
            id: crypto.randomUUID(),
            content: content,
            author: {
              name: 'Leila Zahraoui',
              avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
              role: 'student',
            },
            createdAt: new Date('2025-04-04T11:30:00'),
          }) ;
        }
      }
}