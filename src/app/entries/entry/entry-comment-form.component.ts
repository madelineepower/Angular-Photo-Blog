import {Component, EventEmitter, Output, Input, ViewChild} from '@angular/core';
import { EntryService } from '../shared/entry.service';
import {NgForm} from '@angular/forms';

@Component ({
    selector: 'app-entry-comment-form',
    templateUrl: 'entry-comment-form.component.html'
})

export class EntryCommentFormComponent {
    name: string;
    comment: string;
    @Input() entryId: number;
    @Output() onCommentAdded = new EventEmitter<{name: string; comment: string;}>();
    @ViewChild('commentForm') commentForm: NgForm;
    constructor( private entryService: EntryService){

    }
    onSubmit() {
       let comment = { name: this.name, comment: this.comment};
       this.entryService.addComment(this.entryId, comment)
       .then(() => {
           this.onCommentAdded.emit(comment);
          
       })
   

    }
}