<?xml version="1.0" encoding="utf-8"?>
<mcd>

  <MMLdefinition id="cds_integers"  cdrole="constant">
    <name>integers</name>
    <description>
      <p>integers represents the set of all integers.</p>
    </description>
    <classification>constant </classification>
    <rendering>
      <graphic role="display" source="image/new-integers.gif" alt="42 \in \mathbb{Z}"/>
    </rendering>
    <signature>set</signature>
    <property>
      <description>
	<p>n is an integer implies n+1 is an integer.</p>
          </description><![CDATA[<apply><implies/>
  <apply><in/><ci>n</ci><integers/></apply>
  <apply><in/><apply><plus/><ci>n</ci><cn>1</cn></apply><integers/></apply>
</apply>]]></property>

        <property>
          <description><p>0 is an integer</p></description>
<![CDATA[<apply><in/><cn>0</cn><integers/></apply>]]>
	</property>

        <property>
          <description>
            <p>n is an integer implies -n is an integer</p>
          </description><![CDATA[
<apply><implies/>
  <apply><in/><ci>n</ci><integers/></apply>
  <apply><in/><apply><minus/><ci>n</ci></apply><integers/></apply>
</apply>]]></property>
        <MMLexample><![CDATA[<apply><in/>
  <cn type="integer"> 42 </cn>
  <integers/>
</apply>]]></MMLexample>
      </MMLdefinition>
 
      <MMLdefinition id="cds_reals" cdrole="constant">
        <name>reals</name>
        <description>
          <p>reals represents the set of all real numbers.</p>
        </description>
		<discussion>
			<p><el>reals</el> represents the set of all real numbers.</p>
		</discussion>
        <classification>symbol</classification>
	<rendering>
	  <graphic role="display" source="image/new-reals.gif" alt="44.997 \in \mathbb{R}"/>
	</rendering>
        <signature>set</signature>
        <property>
          <description>
            <p>
(S \subset R and exists y in R : forall x in S x \le y) implies 
exists z in R such that ( ( forall x in S x \le z) and ( (forall x in S x \le w) 
implies z le w)) 
</p>
          </description>
        </property>
        <property>
          <description>
            <p>for all a,b | a,b rational with a&lt;b implies there exists 
rational a,c s.t. a&lt;c and c&lt;b 
</p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><in/>
  <cn type="real"> 44.997 </cn>
  <reals/>
</apply>
]]></MMLexample>
      </MMLdefinition>
      
	  <MMLdefinition id="cds_rationals"  cdrole="constant">
        <name>rationals</name>
        <description>
          <p>rationals represents the set of all rational numbers.</p>
        </description>
		<discussion>
			<p><el>rationals</el> represents the set of all rational numbers.</p>
		</discussion>
        <classification>constant </classification>
	<rendering>
	  <graphic role="display" source="image/new-rationals.gif" alt="22/7 \in \mathbb{Q}"/>
	</rendering>
        <signature>set</signature>
        <property>
          <description>
            <p>for all z where z is a rational, there exists integers p and q with  p/q = z </p>
          </description><![CDATA[
<apply><forall/>
  <bvar><ci>z</ci></bvar>
  <condition><apply><in/><ci>z</ci><rationals/></apply></condition>
  <apply><exists/>
    <bvar><ci>p</ci></bvar>
    <bvar><ci>q</ci></bvar>
    <apply><and/>
      <apply><in/><ci>p</ci><integers/></apply>
      <apply><in/><ci>q</ci><integers/></apply>
      <apply><eq/>
        <apply><divide/><ci>p</ci><ci>q</ci></apply>]]><![CDATA[<integers/></apply>]]><![CDATA[
        <ci>z</ci>
      </apply>
    </apply>
  </apply>
]]>
</property>
        <property>
          <description>
            <p>ForAll( [a,b], a and b are rational, a &lt; b implies there exists c such that a &lt; c and c &lt; b )</p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><in/>
  <cn type="rational"> 22 <sep/>7</cn>
  <rationals/>
</apply>
]]></MMLexample>
      </MMLdefinition>
      <MMLdefinition id="cds_naturalnumbers"  cdrole="constant">
        <name>naturalnumbers</name>
        <description>
          <p>naturalnumbers represents the set of all natural numbers, 
i.e.. non-negative integers.</p>
        </description>
		<discussion>
			<p><el>naturalnumbers</el> represents the set of all natural
			numbers, i.e. non-negative integers.</p>
		</discussion>
        <classification>constant </classification>
	<rendering>
	  <graphic role="display" source="image/new-naturalnumbers.gif" alt="1729 \in \mathbb{N}"/>
	</rendering>
        <signature>set</signature>
        <property>
          <description>
            <p>For all n | n is a natural number implies n+1 is a natural number.</p>
          </description><![CDATA[
<apply><forall/>
  <bvar><ci>n</ci></bvar>
  <apply><implies/>
    <apply><in/><ci>n</ci><naturalnumbers/></apply>
    <apply><in/>
      <apply><plus/><ci>n</ci><cn>1</cn></apply>
      <naturalnumbers/>
    </apply>
  </apply>
</apply>]]></property>
        <property>
          <description>
            <p> 0 is a natural number. </p>
          </description><![CDATA[
<apply><in/><cn>0</cn><naturalnumbers/></apply>]]></property>
        <property>
          <description>
            <p>for all n | n in the natural numbers is equivalent to saying n=0 or n-1 is a natural number 
</p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><in/>
  <cn type="integer">1729</cn>
  <naturalnumbers/>
</apply>
]]></MMLexample>
      </MMLdefinition>
      <MMLdefinition id="cds_complexes"  cdrole="constant">
        <name>complexes</name>
        <description>
          <p>complexes represents the set of all complex numbers, i.e., numbers 
which may have a real and an imaginary part.</p>
        </description>
		<discussion>
			<p><el>complexes</el> represents the set of all complex
			numbers, i.e. numbers which may have a real and an imaginary part.</p>
		</discussion>
        <classification>constant </classification>
	<rendering>
	  <graphic role = "display" source = "image/new-complexes.gif" alt = "17+29\ii \in \mathbb{C}"/>
	</rendering>
        <signature>set</signature>
        <property>
          <description>
            <p><![CDATA[for all z | if z is complex then there exist 
reals x,y s.t. z = x + i * y ]]></p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><in/>
  <cn type="complex">17<sep/>29</cn>
  <complexes/>
</apply>
]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_primes"  cdrole="constant">
        <name>primes</name>
        <description>
          <p>primes represents the set of all natural prime numbers, i.e., integers
          greater than 1 which have no positive integer factor other than themselves and
          1.</p>
	</description>
	<discussion>
	  <p><el>primes</el> represents the set of all natural prime numbers,
	  i.e. integers greater than 1 which have no positive integer factor other than
	  themselves and 1.</p>
	</discussion> 
        <classification>constant </classification>
	<rendering>
	  <graphic role = "display" source = "image/new-primes.gif" alt = "17 \in \mathbb{P}"/>
	</rendering>
	<signature>set</signature>
        <property>
          <description>
            <p>ForAll( [d,p], p is prime, Implies( d | p , d=1 or d=p ) )</p>
          </description><![CDATA[
<apply><forall/>
  <bvar><ci>d</ci></bvar>
  <bvar><ci>p</ci></bvar>
  <condition>
    <apply><and/>
    <apply><in/><ci>p</ci><primes/></apply>
    <apply><in/><ci>d</ci><naturalnumbers/></apply>
    </apply>
  </condition>
  <apply><implies/>
    <apply><factorof/><ci>d</ci><ci>p</ci></apply>
    <apply><or/>
      <apply><eq/><ci>d</ci><cn>1</cn></apply>
      <apply><eq/><ci>d</ci><ci>p</ci></apply>
    </apply>
  </apply>
</apply>
]]></property>
        <MMLexample><![CDATA[<apply>
<in/>
<cn type="integer">17</cn>
<primes/>
</apply>
]]></MMLexample>
      </MMLdefinition>
      
</mcd>
