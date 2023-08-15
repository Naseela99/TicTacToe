
start_game = document.querySelector('.start-btn')
player1 = ''
player2 = ''

let curPlayer = ''
 let board = [['.','.','.'],
 ['.','.','.'],
 ['.','.','.']]


var displayBoard = () =>
{  g_area = document.querySelector('.game-area')
console.log(g_area)
    if(g_area!=null){
        g_area.remove()
    }
    console.log('in display board ')

    board = [['.','.','.'],
 ['.','.','.'],
 ['.','.','.']]
    console.log(board)
   

    // Checking if player is selected



    if(player1===''){
        alert('Please select your players')
    }

    else{


    // console.log(board)
    start_div = document.querySelector('.start-game')
    // console.log(start_div.display)
    start_div.style.display = 'none';

    game_board = document.createElement('div')
    game_board.className = "board"

    
    for (var i=0; i<board.length; i++){
        // console.log(`Row ${row}`)
        row  = board[i]
        for (var j=0; j<row.length;j++){
            // console.log(`Row ${row} Col ${col}`)
            tmp = document.createElement('div')
            tmp.textContent = row[j]
            tmp.className = 'box'
            tmp.setAttribute('coords',[i,j])
            game_board.appendChild(tmp)
        }
    }

    body = document.querySelector('body')
    
    game_area = document.createElement('div')


    game_area.className = 'game-area'

    reset_btn = document.createElement('button')
    reset_btn.textContent = 'Reset'
    reset_btn.className = 'reset-btn'
    game_area.appendChild(reset_btn)
    game_area.appendChild(game_board)
    reset_btn.addEventListener('click',displayBoard)


    
    

    body.appendChild(game_area)

    playGame(board)
}
}

o_btn = document.querySelector('.player1')
x_btn = document.querySelector('.player2')


const setPlayers = (val) =>
{   
    console.log('in set players')

    start_div = document.querySelector('.start-game')

    announce_players = document.createElement('div')
    announce_players.className = 'player-ann'

    if(player1==''){
    
    


    if (val=='O'){
        player1='O';
        player2='X';
        curPlayer = 'O'
        announce_players.textContent = `Player 1: O | Player 2 : X`



    }
    else{
        player2='O';
        player1='X'
        curPlayer = 'X'
        announce_players.textContent = `Player 1: X | Player 2 : O`

    }

    start_div.appendChild(announce_players)
}
}

o_btn.addEventListener('click',setPlayers.bind(null,o_btn.textContent))
// console.log(o_btn.textContent)
x_btn.addEventListener('click',setPlayers.bind(null,x_btn.textContent))




start_game.addEventListener('click', displayBoard)

function playGame(board){
    console.log('in play game')

    box = document.querySelectorAll('.box')
    // console.log(box)
    // console.log('HI')

    for(var i=0; i<box.length;i++){
        // console.log(box[i])
        box[i].addEventListener('click',setBox.bind(null,box[i]))

    }

    function setBox(b) {
        // console.log('here')

        if(b.textContent!='.'){
            alert('Invalid Position')
        }
        else{
        
        b.textContent = curPlayer
        if (curPlayer==='O'){
            coord = b.getAttribute('coords')
            // console.log(coord[0],coord[1],coord[2])

            board[coord[0]][coord[2]] = 'O'

            
            curPlayer='X'
        }
        else{

            coord = b.getAttribute('coords')




            board[coord[0]][coord[2]] = 'X'

            curPlayer='O'
        }

        checkWinner(board)

    }



    }

    function checkWinner(board){
        console.log('in check winner')

        row0 = board[0]
        row1 = board[1]
        row2 = board[2]
        let empty = false

        for(var i =0;i<3;i++){
            if(row0[i]==='.' || row2[i]==='.' || row2[i]==='.'){
                empty=true
            }
        }
        console.log(row0[0])
        winner = false
        // console.log(row0,row1,row2)

        winner_banner = document.createElement('div')
        winner_banner.className = 'winner-div'
        b = document.querySelector('body')


        console.log(row0[0]==row0[1]==row0[2])
        console.log(row0[0] ,row0[1] ,row0[2] )




        if(new Set([row0[0],row1[1],row2[2]]).size === 1 && (row0[0] !='.')){

            
            winner_banner.textContent = `${row0[0]} is the winner`
            b.appendChild(winner_banner)
        winner = true



        }

        else if(new Set([row0[2],row1[1],row2[0]]).size === 1 && (row0[0] !='.')){

            
            winner_banner.textContent = `${row0[2]} is the winner`
            b.appendChild(winner_banner)
        winner = true



        }
        
        else if(new Set([row0[0],row0[1],row0[2]]).size === 1 && (row0[0]!='.')){
            console.log(row0[0].value,row0[1].value,row0[2].value)
            winner_banner.textContent = `${row0[0]} is the winner`
        winner = true


        b.appendChild(winner_banner)



        }
        else if((new Set([row1[0],row1[1],row1[2]]).size) === 1 && (row1[0]!='.')) {
            winner_banner.textContent = `${row1[0]} is the winner`
        winner = true


        b.appendChild(winner_banner)

        }
        else if((new Set([row2[0],row2[1],row2[2]]).size === 1) && (row2[0]!='.')){
            winner_banner.textContent = `${row2[0]} is the winner`
        winner = true


        b.appendChild(winner_banner)


        }
        else if(new Set([row0[0],row1[0],row2[0]]).size === 1 && (row0[0]!='.')){
            winner_banner.textContent = `${row0[0]} is the winner`
        winner = true


        b.appendChild(winner_banner)


        }
        else if(new Set([row0[1],row1[1],row2[1]]).size === 1 && (row0[1]  !='.')){
            winner_banner.textContent = `${row0[1]} is the winner`
        winner = true


        b.appendChild(winner_banner)


        }
        else if(new Set([row0[2],row1[2],row2[2]]).size === 1 && (row0[2] !='.')){
            winner_banner.textContent = `${row0[2]} is the winner`
        winner = true


       
        b.appendChild(winner_banner)


        }

        else if(empty===false){
            // console.log(`Count: ${count_empty}`)
            winner_banner.textContent = `It's a Draw`
        b.appendChild(winner_banner)

            endGame()
            
        }

        if(winner){
            endGame()
        }
        
        
        
    }


    function endGame(){
        console.log('in end game')

        game_area = document.querySelector('.game-area')
        game_area.remove()

        reset_btn = document.createElement('button')
        reset_div = document.createElement('div')

        reset_btn.textContent = 'New Game'
        reset_btn.className = 'new-game'

        reset_div.className = 'reset-div'



        reset_div.appendChild(reset_btn)
        reset_btn.addEventListener('click',restartGame)

        b = document.querySelector('body')
        b.appendChild(reset_div)


        function restartGame(){
            console.log('in restart game')
            reset_div.style.display = 'none';
            player1 = ''
            player2 = ''
            curPlayer = ''

            start_div = document.querySelector('.start-game')
            // console.log(start_div.display)
            start_div.style.display = 'flex';

            winner_div = document.querySelector('.winner-div')
            winner_div.remove()

            player_ann = document.querySelector('.player-ann')
            player_ann.remove()

            // resetBoard()



            




        }

        // function reserBoard(){

        // }

    }

}

