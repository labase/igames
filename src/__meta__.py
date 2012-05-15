"""
    File: __meta__.py
    Description: general configurations importing
"""

import os, sys;
sys.path.append(os.path.join(
                    os.path.dirname(
                        os.path.dirname(
                            os.path.abspath(__file__))), 
                    "conf"))
import conf


def add_jeppeto_into_path():
    sys.path.append(conf.JEPPETO_PATH)
