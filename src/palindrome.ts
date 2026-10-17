export function isPalindrome(str:string): boolean{
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;   
}
// test 1
// test 2
// test 3
