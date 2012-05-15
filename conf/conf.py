"""
    File: conf.py
    Description: general configurations
"""


import os
import sys


# change to your personal jeppeto path
JEPPETO_PATH = "/home/kaiser/workspace/jeppeto"
PATH_DELIMITER = '/'

sys.path.append(os.path.join(JEPPETO_PATH.split(PATH_DELIMITER)))
