class MinHeap {
    
    constructor(size){
        this.heapSize= 0;
        this.array = new Array(size).fill(null);
        this.maxSize=size;
    }


  left(i){
    
        return (2*i +1)
    
  }

  getSize()
  {
    return this.heapSize;
  }

  right(i){
    return (2*i+2);
  }

    parent(i)
    {
        return Math.floor((i-1)/2)
    }

    getMin(){
        return this.array[0]
    }

    print()
    {
      for(let i=0; i<this.heapSize; i++)
      {
        console.log(this.array[i])
      }
    }
    
      bubbleUp(index) {
    while (index > 0 && this.array[index] < this.array[this.parent(index)]) {
      [this.array[index], this.array[this.parent(index)]] = [
        this.array[this.parent(index)],
        this.array[index],
      ];
      index = this.parent(index);
    }
  }
 
  bubbleDown(index) {
    let left = this.left(index);
    let right = this.right(index);
    let smallest = index;
 
    if (
      left < this.heapSize &&
      this.array[left] < this.array[smallest]
    ) {
      smallest = left;
    }
 
    if (
      right < this.heapSize &&
      this.array[right] < this.array[smallest]
    ) {
      smallest = right;
    }
 
    if (smallest !== index) {
      [this.array[index], this.array[smallest]] = [
        this.array[smallest],
        this.array[index],
      ];
      this.bubbleDown(smallest);
    }
  }
    
    // heapify(){
    //     let current = 0;
    //     let left = this.left(current);
    //     let right = this.right(current);
        
    //     while(this.array[left] && this.array[right] && (this.array[left]<this.array[current] || this.array[right]<this.array[current]))
    //     {
    //         if(this.array[left] < this.array[right])
    //         {
    //             [this.array[left], this.array[current]] = [this.array[current], this.array[left]]
    //             current = left
    //         }
    //         else{
    //              [this.array[right], this.array[current]] = [this.array[current], this.array[right]]
    //              current = right;
    //         }
            
    //         left = this.left(current);
    //         right = this.right(current)
    //     }
    // }
    
    remove(){
         
        if(this.heapSize <= 0)
        {
            console.log('The Heap is empty')
            return;
        }
      let removedVal = this.array[0];
            this.array[0] = this.array[this.heapSize-1];
              this.heapSize-=1;
             this.bubbleDown(0)
            return removedVal;
     
    }

 insert(val){
    
    if(this.heapSize == this.maxSize)
    {
        console.log("You have crossed your limits")
    }
    
    let currIndex = this.heapSize;
    this.array[currIndex]=val;
    
    this.heapSize+=1
     this.bubbleUp(currIndex);
    
 
}

}
