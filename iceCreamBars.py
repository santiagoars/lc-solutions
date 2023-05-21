import heapq

def iceCreamBars( costs, coins ):
    bars = 0
    heapq.heapify( costs )
    while( coins >= costs[ 0 ] and len( costs ) > 0 ):
        bars = bars + 1
        coins = coins - costs[ 0 ]
        heapq.heappop( costs )
        if( not len( costs ) > 0 ):
            break
    return bars

def iceCreamBars2( costs, coins ):
    costs.sort()
    i = 0
    bars = 0
    while( i < len( costs ) ):
        if( costs[ i ] <= coins ):
            bars = bars + 1
            coins = coins - costs[ i ]
        i = i + 1
    return bars



print( iceCreamBars2( [1,3,2,4,1], 7) )
        


