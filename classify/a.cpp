#include<iostream>
#include<fstream>
#include<string>
using namespace std;
int main(){
	 ifstream is("a.in");
	 ofstream os("a.out");
	 string s;
	 while (getline(is,s)){
	 	os << "<p>" << endl << s.c_str() << endl << "</p>" << endl;
	 }
	 is.close(); os.close();
	 return 0;
}
