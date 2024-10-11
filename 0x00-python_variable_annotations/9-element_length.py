#!/usr/bin/env python3
"""
This module defines a function that computes the length of each element in a list.
"""

from typing import Iterable, Sequence, List, Tuple

def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Computes the length of each element in a given list.

    Args:
        lst (Iterable[Sequence]): A list of sequences (e.g., strings, lists, tuples).

    Returns:
        List[Tuple[Sequence, int]]: A list of tuples, where each tuple contains
                                     an element and its length.
    """
    return [(i, len(i)) for i in lst]
