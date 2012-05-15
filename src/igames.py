"""
    File: igames.py
    Description: Intelligent games written with Jeppeto
"""

# general confs; adds jeppeto into path
import sys; sys.path.append('../conf')
import conf


# games
from trilha import trilhamain as t


class IGames():
    def show_menu(self):
        while True:
            # waits for user choose a game
            # for a while, forcing trilha game
            self.game = t
            self.start()

    def start(self):
        self.game.main()
        # back to menu after playing
        self.menu()


if __name__ == '__main__':
    games = IGames()
    games.show_menu()
