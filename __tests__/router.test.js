/**
 * @jest-environment jsdom
 */

 import { pushToHistory } from "../scripts/router";
//testing the pushToHsitory function
 describe("testing pushToHistory ", ()=>  {
    test('test default length ', ()=>{
        expect(history.length).toBe(1);
    });

    test('adding entry', ()=>{
        pushToHistory('entry', 1);
        expect(history.state.page).toBe('entry1');
        expect(history.length).toBe(2);
    });

    test('adding settings', ()=>{
        pushToHistory('settings');
        expect(history.state.page).toBe('settings');
        expect(history.length).toBe(3);
    });
        
    test('adding weird page', ()=>{
        pushToHistory('');
        expect(history.state.page).toBe(undefined);
        expect(history.length).toBe(4);
    });

 });