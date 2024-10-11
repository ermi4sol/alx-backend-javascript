#!/usr/bin/env python3
"""
This module provides a function to calculate the sum of a mixed list of integers and floats.
"""

from typing import List, Union

def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Returns the sum of a list of integers and float numbers.

    Args:
        mxd_lst (List[Union[int, float]]): A list of integers and float numbers to sum.

    Returns:
        float: The sum of the numbers in the list as a float.
    """
    return float(sum(mxd_lst))
