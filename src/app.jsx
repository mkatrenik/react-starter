import React from 'react';
import Immutable from 'immutable';
import { Flummox } from 'flummox';

const l = console.log.bind(console);


export class Flux extends Flummox {
    constructor() {
        super();

        this.createActions('messages', MessageActions);
        this.createStore('messages', MessageStore, this);
    }
}


export class App {
    render () {
        return <div>hello world</div>;
    }
}
