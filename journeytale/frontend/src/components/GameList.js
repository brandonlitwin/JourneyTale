import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Link } from 'react-router-dom';

const GameList = ({ games }) => {
    console.log("Received games in GameList:", games); // Debug log
    return (
      <div>
        {games.map((game) => (
          <Disclosure key={game.id}>
            {({ open }) => (
              <>
                <DisclosureButton className={`py-2 px-4 text-lg text-white font-medium font-serif w-full text-left bg-indigo-500 rounded-lg shadow-md ${open ? 'bg-blue-300' : 'bg-blue-200'}`}>
                  {game.title}
                </DisclosureButton>
                <DisclosurePanel className="pl-6 pr-4 py-2 bg-gray-200 rounded-lg shadow-inner">
                    <p className="mb-2">{game.description}</p> {/* Display description if available */}
                    <Link 
                        to={`/game-entry/${game.id}`} 
                        className="text-blue-500 underline hover:text-blue-700"
                    >
                        View Game Entry
                    </Link>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    );
  };  

export default GameList;
