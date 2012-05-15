"""
    File: conf.py
    Description: general configurations
"""


import os
import sys


# change to your personal jeppeto path
JEPPETO_PATH = "/home/kaiser/workspace/jeppeto"


def add_jeppeto_into_path():
    sys.path.append(JEPPETO_PATH)
