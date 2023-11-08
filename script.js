const spotifyObjects = [
    {
        name: 'No Gletcher Gang',
        artist: 'FRIENDLY THUG 52 NGG',
        duration: '2:18',
        imageUrl: './image/image1.jpg',
    },
    {
        name: 'Sold Out',
        artist: 'FRIENDLY THUG 52 NGG, kizaru',
        duration: '2:33',
        imageUrl: './image/image1.jpg',
    },
    {
        name: 'BRITNEY',
        artist: 'OBLADAET',
        duration: '2:54',
        imageUrl: './image/image2.jpeg',
    },
    {
        name: 'Una Mattina',
        artist: 'Ludovico Einaudi',
        duration: '3:26',
        imageUrl: './image/image3.jpeg',
    },
  ];
  
  const TableComponent = (props) => {
    const { organization, objects } = props;
  
    const rows = objects.map((object, index) => (
      React.createElement('tr', { key: index },
        React.createElement('td', null, object.name),
        React.createElement('td', null, object.artist),
        React.createElement('td', null, object.duration),
        React.createElement('td', null,
        React.createElement('img', { src: object.imageUrl, alt: object.name })
        )
      )
    ));
  
    return React.createElement('div', null,
      React.createElement('h2', null, organization),
      React.createElement('table', null,
        React.createElement('thead', null,
          React.createElement('tr', null,
            React.createElement('th', null, 'Name'),
            React.createElement('th', null, 'Artist'),
            React.createElement('th', null, 'Duration'),
            React.createElement('th', null, 'Image')
          )
        ),
        React.createElement('tbody', null, rows)
      )
    );
  };
  

  TableComponent.propTypes = {
    organization: PropTypes.string.isRequired,
    objects: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })).isRequired,
  };
  
  const organizationName = "My Spotify Playlist";
  ReactDOM.render(React.createElement(TableComponent, { organization: organizationName, objects: spotifyObjects }), document.getElementById('root'));  