import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from "@angular/animations";

export const slideUpDown: AnimationTriggerMetadata = trigger('slideUpDown' , [
    // transition(':enter', [
    //     style({ transform: 'translateY(100%)', position: 'absolute', top: 100}),
    //     animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
    // ]),
    // transition(':leave', [
    //     animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
    // ])
    state('up', style({ height: '375px'})),
    state('down', style({ height: '0px'})),
    transition('up <=> down', [animate('1s')])
]);