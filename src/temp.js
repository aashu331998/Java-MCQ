[[
    [{
    1:"Which of the following is true about ListIterator and Iterator ?",
    
    opt1:"ListIterator can traverse lists in both direction",
    opt2:"Iterator can do operations like modifying the items it holds.",
    opt3:"ListIterator can traverse lists in backward direction",
    opt4:"Iterator can remove the elements",
    Ans:"opt-4"
    }],
      [{
    2:"which of the following are false about Collections and Collection ?",
    opt1:"Collections is a utility class",
    opt2:"Collection is an interface to Set and List",
    opt3:"Collections is a special type of collection which holds Set of collections",
    opt4:"Both Collections and Collection entity belongs to java.util package.",
    Ans:"opt-3"
    }],
    [{
    3:"What is the data structure that a Set uses to store its elements  ?",
    opt1:"Array",
    opt2:"Object",
    opt3:"Map",
    opt4:"ArrayList",
    Ans:"opt-3"
    }],
    [{
    4:"What is the output of the following program ? 
      import java.util.HashMap; 
      import java.util.Map; 
      public class MapTest {  
      public static void main(String aga[]){ 
            Map m= new HashMap();  
            m.put(null, "Test"); 
            m.put(null,"Fest"); 
            System.out.println(m); 
        }
    }
    ",
    opt1:"{null=Fest}",
    opt2:"NullPointerException at 6",
    opt3:"{null=Test}",
    opt4:"Compilation error at 7 and 8",
    Ans:"opt1"
    }],
    [{
    5:"What is the output of the following program ? 
      import java.util.HashSet;
      
    class Animal {
        public int i=12;
         
        public Animal(){
            i=13;
        }
        public String toString(){
            return "Animal"+i;
        }
    }
    public class Test {
        public static void main(String [] args) throws Exception {
           HashSet<animal> s= new HashSet<animal>();
           s.add(new Animal());
           s.add(new Animal());
           for(Animal a : s){
               System.out.println(a);
           }
        }
    }
    
    ",
    opt1:"Animal 0",
    opt2:"Animal 13",
    opt3:"Animal 13
          Animal 13",
    opt4:"Runtime error about duplicate elements",
    Ans:"opt3"
    }],
    [{
    6:"Suppose that you would like to create an instance of a new Map that has an iteration order that is the same as the iteration order of an existing instance of a Map. Which concrete implementation of the Map interface should be used for the new instance?",
    opt1:"TreeMap",
    opt2:"HashMap",
    opt3:"LinkedHashMap",
    opt4:"The answer depends on the implementation of the existing instance.",
    Ans:"opt3"
    }],
    [{
    7:"Which class does not override the equals() and hashCode() methods, inheriting them directly from class Object?",
    opt1:"java.lang.String",
    opt2:"java.lang.Double",
    opt3:"java.lang.StringBuffer",
    opt4:"java.lang.Character",
    Ans:"opt3"
    }],
    [{
    8:"Which collection class allows you to grow or shrink its size and provides indexed access to its elements, but whose methods are not synchronized?",
    opt1:"java.util.HashSet",
    opt2:"java.util.LinkedHashSet",
    opt3:"java.util.List",
    opt4:"java.util.ArrayList",
    Ans:"opt4"
    }],
    [{
    9:"You need to store elements in a collection that guarantees that no duplicates are stored and all elements can be accessed in natural order. Which interface provides that capability?",
    opt1:"java.util.Map",
    opt2:"java.util.Set",
    opt3:"java.util.List",
    opt4:"java.util.Collection",
    Ans:"opt2"
    }],
    [{
    10:"Which interface does java.util.Hashtable implement?",
    opt1:"java.util.Map",
    opt2:"java.util.List",
    opt3:"java.util.HashTable",
    opt4:"java.util.Collection",
    Ans:"opt1"
    }],
    [{
    11:"Which collection class allows you to associate its elements with key values, and allows you to retrieve objects in FIFO (first-in, first-out) sequence?",
    opt1:"java.util.ArrayList",
    opt2:"java.util.LinkedHashMap",
    opt3:"java.util.HashMap",
    opt4:"java.util.TreeMap",
    Ans:"opt2"
    }],
    [{
    12:"What will be the output of the program? /n
        import java.util.*; 
    class I 
    {
        public static void main (String[] args) 
        {
            Object i = new ArrayList().iterator(); 
            System.out.print((i instanceof List)+","); 
            System.out.print((i instanceof Iterator)+","); 
            System.out.print(i instanceof ListIterator); 
        } 
    }
    ",
    opt1:"Prints: false, false, false",
    opt2:"Prints: false, false, true",
    opt3:"Prints: false, true, false",
    opt4:"Prints: false, true, true"",
    Ans:"opt3"
    }],
    [{
    13:"What will be the output of the program?
        TreeSet map = new TreeSet();
    map.add("one");
    map.add("two");
    map.add("three");
    map.add("four");
    map.add("one");
    Iterator it = map.iterator();
    while (it.hasNext() ) 
    {
        System.out.print( it.next() + " " );
    }",
    opt1:"one two three four",
    opt2:"four three two one",
    opt3:"four one three two",
    opt4:"one two three four one",
    Ans:"opt3"
    }],
    [{
    14:"What will be the output of the program:
        import java.util.EnumSet;
    import java.util.Set;
     
    
    public class EnumSetTest {
        private enum Days {
               Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday;
     
               public static Set<Days> allDays = EnumSet.allOf(Days.class);
               
               public static Set<Days> weekDays = EnumSet.range(Monday, Friday);
         
         public boolean isWeekDay() {
           return weekDays.contains(this);
         }   
        }
     
        /** Main */
        public static final void main(final String args[]) {
               System.out.println(Days.weekDays.size());
         
               Days day=Days.Monday;
               System.out.println( (day.isWeekDay() ? "is WeekDay" : "is weekEnd"));
               
               day=Days.Sunday;
               System.out.println( (day.isWeekDay() ? "is WeekDay" : "is weekEnd"));
               
               
         day=Days.Monday;
         System.out.println(Days.allDays.contains(day));
     
         System.out.println(day.ordinal());
        }
    }",
    opt1:"5
    is WeekDay
    is weekEnd
    true
    0",
    opt2:"5
    is WeekEnd
    is weekEnd
    true
    0",
    opt3:"5
    is WeekDay
    is weekEnd
    false
    0",
    opt4:"5
    is WeekDay
    is WeekDay
    true
    0",
    Ans:"opt1"
    }],
    [{
    15:"What will be the output of the program:
        import java.util.Comparator;
    import java.util.Set;
    import java.util.TreeSet;
     
    /** Copyright (c), AnkitMittal JavaMadeSoEasy.com */
    public class SortSet {
     
        public static void main(String...a){
            Set<Integer> treeSet = new TreeSet<Integer>(new Comparator<Integer>() {
                      public int compareTo(Integer o1, Integer o2) {
                            return o2.compareTo(o1);
                      }
               });
            treeSet.add(3);
            treeSet.add(1);
            treeSet.add(2);
            System.out.println(treeSet);
        }
    }
    ",
    opt1:"3 1 2",
    opt2:"1 2 3",
    opt3:"Compile time error",
    opt4:"3 3 3",
    Ans:"opt3"
    }],
    [{
    16:"Iterator returned by Hashtable on key, value and entry are?",
    opt1:"Fail-fast",
    opt2:"Fail-safe",
    opt3:"None of the Above",
    opt4:"Both 1 and 2",
    Ans:"opt1"
    }],
    [{
    17:" Iterator returned by ConcurrentSkipListMap on key, value and entry is?",
    opt1:"Fail-fast",
    opt2:"Fail-safe",
    opt3:"None of the Above",
    opt4:"Both 1 and 2",
    Ans:"opt-2"
    }],
    [{
    18:"TreeMap -",
    opt1:"Doesn't enable null key",
    opt2:"Allow several null values",
    opt3:"None of the Above",
    opt4:"Both 1 and 2",
    Ans:"opt-2"
    }],
    [{
    19:"Complexity of ArrayList get method is:",
    opt1:"O(n-1)",
    opt2:"O(n)",
    opt3:"O(1)",
    opt4:"O(2n)",
    Ans:"opt-3"
    }],
    
    [{
    20:"What will be the output of the program: 
        import java.util.Collection;
    import java.util.HashSet;
    import java.util.Set;
    import java.util.TreeSet;
     
    
    public class SortSet {
        public static void main(String...a){
            Collection<Integer> collection = new HashSet<Integer>();
            collection.add(3);
            collection.add(1);
            collection.add(2);
            collection.add(null);
     
            Set<Integer> treeSet = new TreeSet<Integer>();
            treeSet.addAll(collection);
            System.out.println(treeSet);  
        }
    }",
    opt1:"3 2 1",
    opt2:"3 2 1 null",
    opt3:"null",
    opt4:"Runtime Exception - NullPointerException",
    Ans:"opt-4"
    }],
    [{
    21:"What will be the output of the program: 
    import java.util.ArrayList;
    import java.util.Collections;
    import java.util.Comparator;
    import java.util.HashMap;
    import java.util.List;
    import java.util.Map;
    import java.util.Map.Entry;
    import java.util.Set;
     
    class Sort implements Comparator<Map.Entry<Integer, Integer>>{
        @Override
        public int compare( Map.Entry<Integer, Integer> entry1, Map.Entry<Integer, Integer> entry2 ){
            return (entry2.getValue()).compareTo( entry1.getValue() );
        }
    }
     
    
    public class MyClass {
        public static void main(String...a){
            Map<Integer, Integer> map = new HashMap<Integer, Integer>();
            map.put(1, 2);
            map.put(2, 1);
            map.put(4, 8);
         
            Set<Entry<Integer, Integer>> set = map.entrySet();
            List<Entry<Integer, Integer>> list = new ArrayList<Entry<Integer, Integer>>(set);
     
            Collections.sort(list, new Sort());     
     
            for(Map.Entry<Integer, Integer> entry:list)
             System.out.print(entry.getKey());            
        }
    }
    
    ",
    opt1:"412",
    opt2:"214",
    opt3:"124",
    opt4:"421",
    Ans:"opt-1"
    }],
    [{
    22:"Which of these return type of hasNext() method of an iterator?",
    opt1:"Integer",
    opt2:"Double",
    opt3:"Boolean",
    opt4:"Collections object",
    Ans:"opt-3"
    }],
    [{
    23:"Which of these is a method of ListIterator used to obtain index of previous element?",
    opt1:"previous()",
     opt2:"previousIndex()",
    opt3:"back()",
    opt4:"goBack()",
    Ans:"opt-2"
    }],
    [{
    24:"What will be the output of the following Java program?
        import java.util.*;
        class Collection_iterators 
        {
            public static void main(String args[]) 
            {
                ListIterator a = list.listIterator();
                    if(a.previousIndex()! = -1)
                        while(a.hasNext())
                        System.out.print(a.next() + " ");
                    else
                       System.out.print("EMPTY");
            }
        }",
    opt1:"0",
    opt2:"1",
    opt3:"-1",
    opt4:"EMPTY",
    Ans:"opt-4"
    }],
    [{
    25:"What will be the output of the program:
        import java.util.*;
        class Collection_iterators 
        {
            public static void main(String args[]) 
            {
                LinkedList list = new LinkedList();
                list.add(new Integer(2));
                list.add(new Integer(8));
                list.add(new Integer(5));
                list.add(new Integer(1));
                Iterator i = list.iterator();
                Collections.reverse(list);
            while(i.hasNext())
                System.out.print(i.next() + " ");
            }
        }",
    opt1:"2851",
    opt2:"1582",
    opt3:"2",
    opt4:"2185",
    Ans:"opt-2"
    }],
    [{
    26:"What will be the output of the program:
         import java.util.*;
        class Collection_iterators 
        {
            public static void main(String args[]) 
            {
                LinkedList list = new LinkedList();
                list.add(new Integer(2));
                list.add(new Integer(8));
                list.add(new Integer(5));
                list.add(new Integer(1));
                Iterator i = list.iterator();
                Collections.reverse(list);
            Collections.shuffle(list);
                i.next();
                i.remove();
                while(i.hasNext())
                System.out.print(i.next() + " ");
            }
        }
    ",
    opt1:"285",
    opt2:"218",
    opt3:"258",
    opt4:"851",
    Ans:"opt-2"
    }],
    [{
    27:"What happens if we put a key object in a HashMap which exists?",
    opt1:"The new object replaces the older object",
    opt2:"The new object is discarded",
    opt3:"The old object is removed from the map",
    opt4:"It throws an exception as the key already exists in the map",
    Ans:"opt-1"
    }],
    [{
    28:"While finding the correct location for saving key value pair, how many times the key is hashed?",
    opt1:"1",
    opt2:"2",
    opt3:"3",
    opt4:" unlimited till bucket is found",
    Ans:"opt-2"
    }],
    [{
    30:" How to externally synchronize hashmap?",
    opt1:"HashMap.synchronize(HashMap a);",
    opt2:"HashMap a = new HashMap();
    a.synchronize();",
    opt3:"Collections.synchronizedMap(new HashMap<String, String>());",
    opt4:"Collections.synchronize(new HashMap<String, String>());",
    Ans:"opt-3"
    }],
    [{
    31:" What will be the output of the following Java code snippet?
        public class Demo
    {
      public static void main(String[] args)
      {
            Map<Integer, Object> sampleMap = new TreeMap<Integer, Object>();
            sampleMap.put(1, null); 
            sampleMap.put(5, null); 
            sampleMap.put(3, null); 
            sampleMap.put(2, null); 
            sampleMap.put(4, null); 
     
           System.out.println(sampleMap);
       }
    }",
    opt1:"{1=null, 2=null, 3=null, 4=null, 5=null}",
    opt2:"{5=null}",
    opt3:" Exception is thrown",
    opt4:"{1=null, 5=null, 3=null, 2=null, 4=null}",
    Ans:"opt-1"
    }],
    [{
    32:" If large number of items are stored in hash bucket, what happens to the internal structure?",
    opt1:"The bucket will switch from LinkedList to BalancedTree",
    opt2:"The bucket will increase its size by a factor of load size defined",
    opt3:"The LinkedList will be replaced by another hashmap",
    opt4:"Any further addition throws Overflow exception",
    Ans:"opt-1"
    }],
    [{
    33:"What is the relation between hashset and hashmap?",
    opt1:"HashSet internally implements HashMap",
    opt2:"HashMap internally implements HashSet",
    opt3:" HashMap is the interface; HashSet is the concrete class",
    opt4:"HashSet is the interface; HashMap is the concrete class",
    Ans:"opt-1"
    }],
    [{
    34:"What will be the output of the following Java code snippet?
         public class Test 
    {
        public static void main(String[] args) 
            {
            Set s = new HashSet();
            s.add(new Long(10));
            s.add(new Integer(10));
            for(Object object : s)
                    {
                System.out.println("test - "+object);
            }
        }
    }",
    opt1:" Test - 10
       Test - 10",
    opt2:"Test – 10",
    opt3:"Runtime Exception",
    opt4:"Compilation Failure",
    Ans:"opt-1"
    }],
    [{
    35:"What happens if two threads simultaneously modify TreeSet?",
    opt1:"ConcurrentModificationException is thrown",
    opt2:"Both threads can perform action successfully",
    opt3:"FailFastException is thrown",
    opt4:"IteratorModificationException is thrown",
    Ans:"opt-1"
    }],
    [{
    36:" Which of these is true about unmodifiableCollection() method?",
    opt1:"unmodifiableCollection() returns a collection that cannot be modified",
    opt2:"unmodifiableCollection() method is available only for List and Set",
    opt3:"unmodifiableCollection() is defined in Collection class",
    opt4:"none of the mentioned",
    Ans:"opt-2"
    }],
    [{
    37:"What is the difference between length() and size() of ArrayList?",
    opt1:"length() and size() return the same value",
    opt2:"length() is not defined in ArrayList",
    opt3:"size() is not defined in ArrayList",
    opt4:"length() returns the capacity of ArrayList and size() returns the actual number of elements stored in the list",
    Ans:"opt-4"
    }],
    [{
    38:"What is the worst case complexity of accessing an element in ArrayList?",
    opt1:"O(n)",
    opt2:"O(1)",
    opt3:"O(nlogn)",
    opt4:"O(2)",
    Ans:"opt-2"
    }],
    [{
    39:"Which of this method is used to change an element in a LinkedList Object?",
    opt1:"change()",
    opt2:"set()",
    opt3:"redo()",
    opt4:"ddd()",
    Ans:"opt-2"
    }],
    [{
    40:"Which of these methods can be used to obtain set of all keys in a map?",
    opt1:"getAll()",
    opt2:"getKeys()",
    opt3:"keyAll()",
    opt4:"keySet()",
    Ans:"opt-4"
    }],
    [{
    41:"What is the Output of following Java Program?
        import java.util.ArrayList; 
      
    class Demo { 
    public void show() 
        { 
            ArrayList<String> list = new ArrayList<String>(); 
            ArrayList<Integer> list1 = new ArrayList<Integer>(); 
            boolean check = (list.getClass() == list1.getClass()); 
            System.out.println(check); 
        } 
    } public class Main { 
    public static void main(String[] args) 
        { 
            Demo demo = new Demo(); 
            demo.show(); 
        } 
    } ",
    opt1:"true",
    opt2:"false",
    opt3:"Compilation Error",
    opt4:"None of the above",
    Ans:"opt-1"
    }],
    [{
    42:"What values will hashSet contain at the end of the program?
    
    import java.util.HashSet;
    
    public class HashRetain
    {
        public static void main(String Str[])
        {
            HashSet<String> hashSet = new HashSet<String>();
            hashSet.add("A");
            hashSet.add("B");
            hashSet.add("C");
            hashSet.add("D");
            hashSet.add("E");
    
            HashSet<String> subSet = new HashSet<String>();
            subSet.add("E");
            subSet.add("B");
            subSet.add("A");
            subSet.add("F");
            hashSet.retainAll(subSet);
        }
    }",
    opt1:"A, B, C, D, E, F",
    opt2:"A,B,E",
    opt3:"C,D",
    opt4:"Compilation Error or Runtime Error",
    Ans:"opt-2"
    }],
    [{
    43:"What will be the output of the following program?
    
    import java.util.*;
    
    public class MyNameIsKhan {
        private final String first, last;
        public MyNameIsKhan(String first, String last) {
            this.first = first;
            this.last = last;
        }
        public boolean equals(Object o) {
            if (!(o instanceof MyNameIsKhan))
                return false;
            MyNameIsKhan n = (MyNameIsKhan) o;
            return n.first.equals(first) || n.last.equals(last);
        }
        public static void main(String[] args) {
            Set<MyNameIsKhan> s = new HashSet<MyNameIsKhan>();
            s.add(new MyNameIsKhan("Shahrukh", "Khan"));
            System.out.println(s.contains(new MyNameIsKhan("Shahrukh", "Khan")));
        }
    }",
    opt1:"false false",
    opt2:"true true",
    opt3:"false",
    opt4:"true",
    Ans:"opt-3"
    }],
    [{
    44:"What will be the output of following program?
    
    import java.util.*;
    public class Names {
        static String s;
        public Names(String s) {
            Names.s = s;
        }
        public static void main(String[] args) {
            HashSet<Object> hs = new HashSet<Object>();
            Names ws1 = new Names("pranavi");
            Names ws2 = new Names("madhavi");
            String s1 = new String("jahnavi");
            String s2 = new String("vyshnavi");
            String s3 = new String("vyshnavi");
            hs.add(ws1);
            hs.add(ws2);
            hs.add(s1);
            hs.add(s2);
            hs.add(s3);
            System.out.println(hs.size());
        }
    }",
    opt1:"3",
    opt2:"4",
    opt3:"7",
    opt4:"Some other output",
    Ans:""
    }],
    [{
    45:"What will be output of below code :
       package org.arpit.java2blog;
     
    import java.util.LinkedList;
    import java.util.Queue;
     
    public class CollQuestion {
     public static void main(String... args) {
      Queue q = new LinkedList();
      q.add("Delhi");
      q.add("Mumbai");
      q.add("Pune");
      show(q);
     }
     
     public static void show(Queue q) {
      q.add(new Integer(100));
      while (!q.isEmpty())
       System.out.print(q.poll() + " ");
     }
    }
     ",
    opt1:"Compile error : Integer can’t be added to the queue",
    opt2:"Delhi Mumbai Pune 100",
    opt3:"Delhi Mumbai  Pune",
    opt4:"Delhi Mumbai",
    Ans:"opt-2"
    }],
    [{
    46:"Examine the following code:
    
    ArrayList<String> list = new ArrayList<String>(10) ;
    list.add( "Ann" );
    list.add( "Bob" );
    list.add( "Eve" );
    After the code has executed, what is the capacity of list? What is its size?",
    opt1:"3,3",
    opt2:"3,10",
    opt3:"10,3",
    opt4:"10,10",
    Ans:"opt-3"
    }],
    [{
    47:"What equals() method must you override when defining a class of objects you expect to hold in a ArrayList ?",
    opt1:"public boolean equals( Object )",
    opt2:" public boolean equals( ArrayList )",
    opt3:" boolean equals( Object )",
    opt4:"private int equals( Object )",
    Ans:"opt-1"
    }],
    [{
    48:"which of the following declarations would be appropriate for a list that is expected to contain integers?",
    opt1:"ArrayList<String> list = new ArrayList<String>() ;",
    opt2:"ArrayList<int> list = new ArrayList<int>() ;",
    opt3:"ArrayList<Integer> list = new ArrayList<Integer>() ;",
    opt4:"ArrayList list = new ArrayList() ;",
    Ans:"opt-3"
    }],
    [{
    49:"Examine the following code:
    
    ArrayList<String> list = new ArrayList<String>() ;
    
    list.add( "Andy" );
    list.add( "Bart" );
    list.add( "Carl" );
    list.add( "Doug" );
    list.add( "Elmo" );
    Which of the following will change the list so that it looks like:
    
    Andy
    Bart
    Carl
    Doug ",
    opt1:"list.remove( list.size() );",
    opt2:"list.remove( list.size()-1 );",
    opt3:"list.remove( 5 );",
    opt4:"list.clear( "Elmo" );",
    Ans:"opt-2"
    }],
    [{
    50:"Why ArrayList takes less memory overhead?",
    opt1:"it stores only objects",
    opt2:"stores object as well as address of the object",
    opt3:"stores only address of the object",
    opt4:"none of the above",
    Ans:"opt-1"
    }],
    ],
    [{rollNum:"IT-2k17-23"}]]
    