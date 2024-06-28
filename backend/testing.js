import { java } from "./compiler.js";
const data = {
  code: `import java.util.Scanner;

/**
 * D_Remove_Two_Letters
 */
public class Main{

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-->0){
            int n = sc.nextInt();
            String s = sc.next();
            int ans = n-1;
            int extra = 0;

            for(int i=0;i<n-2;i++){
                if(s.charAt(i) == s.charAt(i+2)){
                    extra++;
                }
            }
            System.out.println(ans-extra);
        }
    }
}`,
  lang: "java",
  input: `7
6
aaabcc
10
aaaaaaaaaa
6
abcdef
7
abacaba
6
cccfff
4
abba
5
ababa
`,
};

const output = await java(data);
console.log(output);
