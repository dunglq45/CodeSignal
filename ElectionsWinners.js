function electionsWinners(votes, k) {
    var m = Math.max(...votes);
    if(k == 0)
        return votes.filter(v => {return v === m}).length == 1? 1:0;
    return votes.filter(v => { return (v + k) > m}).length;
}