#/usr/bin/env python
import numpy as np
from collections import Counter

def IndexFilter(cvals, fvals, condition=lambda fvi: True):
    counter = Counter(cvals)
    return [i for i,fvi in enumerate(fvals) if condition(counter[fvi])]

if __name__ == '__main__':
    # initialize
    numbers = np.array([(m,n) for m in range(2,100) for n in range(m+1,100)])
    sums = np.array([m+n for (m,n) in numbers])
    muls = np.array([m*n for (m,n) in numbers])

    # Subsets: when having no infomation, Mr.P don't know
    idx_a0 = IndexFilter(muls, muls, condition=lambda fmi: fmi>1)
    idx_a0_op = IndexFilter(muls, muls, condition=lambda fmi: fmi==1)

    # Subsets: Mr.S know Mr.P don't know
    opps = sums[idx_a0_op]
    idx_a1 = IndexFilter(opps, sums, condition=lambda fsi: fsi==0)

    # Subsets: Mr.S still don't know.
    sums,muls = sums[idx_a1],muls[idx_a1]
    idx_a2 = IndexFilter(sums, sums, condition=lambda fsi: fsi>1)

    # Subsets: Mr.P now know the answer.
    sums,muls = sums[idx_a2],muls[idx_a2]
    idx_a3 = IndexFilter(muls, muls, condition=lambda fmi: fmi==1)

    # Subsets: Mr.S now know the answer.
    sums,muls = sums[idx_a3],muls[idx_a3]
    idx_a4 = IndexFilter(sums, sums, condition=lambda fsi: fsi==1)

    # show results
    m,n = numbers[idx_a1][idx_a2][idx_a3][idx_a4][0]
    print("a0 = %d"%len(idx_a0))
    print("a1 = %d"%len(idx_a1))
    print("a2 = %d"%len(idx_a2))
    print("a3 = %d"%len(idx_a3))
    print("a4 = %d"%len(idx_a4))
    print("m = %d, n = %d"%(m,n))
