import heapq
def topKFrequent( nums, k: int):
        map = {}
        for number in nums:
            if( number in map.keys() ):
                map[ number ] = map[ number ] + 1
            else:
                map[ number ] = 1

        heap = []
        for item in map.items():
            heap.append( (item[ 1 ], item[ 0 ] ))

        heapq.heapify( heap )

        while( len( heap ) > k ):
            heapq.heappop( heap )


        output = []
        for element in heap:
            output.append( element[ 1 ] )
    
        return output

print( topKFrequent( [1,2], 2 ) )