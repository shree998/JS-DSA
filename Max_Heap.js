class MaxHeap {
    
    constructor(size){
        this.heapSize= 0;
        this.array = new Array(size).fill(null);
        this.maxSize=size;
    }


  left(i){
    
        return (2*i +1)
    
  }

  right(i){
    return (2*i+2);
  }

    parent(i)
    {
        return Math.floor((i-1)/2)
    }

    getMax(){
        return this.array[0]
    }

    print()
    {
      for(let i=0; i<this.heapSize; i++)
      {
        console.log(this.array[i])
      }
    }
     getSize()
  {
    return this.heapSize;
  }

    
    
    // heapify(){
    //     let current = 0;
    //     let left = this.left(current);
    //     let right = this.right(current);
        
    //     while(this.array[left] && this.array[right] && (this.array[left]>this.array[current] || this.array[right]>this.array[current]))
    //     {
    //         if(this.array[left] > this.array[right])
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
    bubbleUp(index) {
        while (index > 0 && this.array[index] > this.array[this.parent(index)]) {
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
    let largest = index;
 
    if (
      left < this.heapSize &&
      this.array[left] > this.array[largest]
    ) {
      largest = left;
    }
 
    if (
      right < this.heapSize &&
      this.array[right] > this.array[largest]
    ) {
      largest = right;
    }
 
    if (largest !== index) {
      [this.array[index], this.array[largest]] = [
        this.array[largest],
        this.array[index],
      ];
      this.bubbleDown(largest);
    }
  }
    remove(){
        
        if(this.heapSize<= 0)
        {
            console.log('The Heap is empty')
            return;
        }
        // if(this.heapSize == 1){
        //     this.array.splice(this.heapSize-1)
        //     this.heapSize-=1;
        //     return removedVal
        // }
        //  if(this.heapSize == 3){
        // this.array[0] = this.array[this.heapSize-1];
        // this.array.splice(this.heapSize-1)
        //     if(this.array[0]<this.array[1])
        //     {
        //         [this.array[0],this.array[1]] = [this.array[1],this.array[0]]
        //     }
        //       this.heapSize-=1;
        //       return removedVal;
            
        // }
         let removedVal = this.array[0];
            this.array[0] = this.array[this.heapSize-1];
              this.heapSize-=1;
             this.bubbleDown(0)
            return removedVal
     
    }

 insert(val){
    
    if(this.heapSize == this.maxSize)
    {
        console.log("You have crossed your limits")
    }
    
    let currIndex = this.heapSize;
    this.array[currIndex]=val;
    
    this.heapSize+=1
    
   this.bubbleUp(currIndex)
   
}

}

