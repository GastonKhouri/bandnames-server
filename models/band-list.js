const Band = require("./band");

class BandList {

    constructor() {

        this.bands = [
            new Band('Imagine Dragons'),
            new Band('One Direction'),
            new Band('Led Zepellin'),
            new Band('Bon Jovi'),
        ]
        
    }

    addBand( name ) {

        const band = new Band( name );
        this.bands.push( band );
        return this.bands;

    }

    removeBand( id ) {

        this.bands = this.bands.filter( band => band.id !== id );

    }

    getBands() {

        return this.bands;

    }

    increaseVotes( id ) {

        this.bands = this.bands.map( band => {

            if ( band.id === id ) {
                band.votes++;
            }

            return band;

        })

    }

    changeName( id, newName ) {

        this.bands = this.bands.map( band => {

            if ( band.id === id ) {
                band.name = newName;
            }

            return band;

        })

    }

}

module.exports = BandList;