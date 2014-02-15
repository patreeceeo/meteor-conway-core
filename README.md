Conway Core
===========

I extracted this package from a just-for-fun project: yet another implementation of [Conway's Game of Life](http://en.wikipedia.org/wiki/Conway's_Game_of_Life). The symbol `Conway` is exported on the server and client, with the following methods/properties:

# On both client and server

``coffeescript
Conway.geometry.with   # width, in cells, of the game world

Conway.geometry.height # height, in cells, of the game world

Conway.Cell            # class representing a single cell

Conway.save()          # save the state of the game world to the database

Conway.createFixture() # create the game world, pass {randomize: true} for randomness
``

# On the client only

``coffeescript
Conway.getCells()      # returns an Array of all the cells, length will be width * height 

Conway.play()

Conway.pause()

Conway.isPlaying()
``


