function solve(input) {
  const typeToDisplay = input.pop();

  const [_, ...songs] = input;

  songs.map((songAsText) => {
    const [type, name, length] = songAsText.split("_");

    if(typeToDisplay === "all"){
      console.log(name);
      
    }
    else if (type === typeToDisplay) {
      console.log(name);
    } 
  });
}

solve([2,
  'like_Replay_3:15',
  'ban_Photoshop_3:48',
  'all']
  );
