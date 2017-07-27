import { FormControl } from '@angular/forms';

export function retricterWords(words: any) {
    return (control: FormControl): {[key: string]: any} => {
        if(!words) return null;
        let invalidWords = words.map((w:any) => control.value.includes(w) ? w : null)
                                .filter((w:any) => w != null );

        return (invalidWords && invalidWords.length > 0)?
                    {'retricterWords': invalidWords.join(',')}
                    : null;
        //return control.value.includes('foo')? {'retricterWords': 'foo'} : null;
    }
}