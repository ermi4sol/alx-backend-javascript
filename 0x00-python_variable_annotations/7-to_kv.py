#!/usr/bin/env python3
"""
This module provides a function to create a tuple from a string and the square of a number.
"""

from typing import Union, Tuple

def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Returns a tuple where the first element is a string k and the second element is the square of v.

    Args:
        k (str): A string key.
        v (Union[int, float]): An integer or float value.

    Returns:
        Tuple[str, float]: A tuple containing the string and the square of the value.
    """
    return (k, float(v ** 2))
