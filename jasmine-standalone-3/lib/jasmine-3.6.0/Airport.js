class Airport {

  constructor() {
    this.planes = []
  }

  land (plane){
    if (this.planes.length === 20) {
      throw new Error("Airport is full");
    }
    
    this.planes.push(plane)
  }

  takeOff (plane){
    let index = this.planes.findIndex(plane)
    this.planes.splice(index)
  }

}
