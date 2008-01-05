<?xml version="1.0" encoding="utf-8"?>
<mcd>
  <MMLdefinition xml:id="cds_quotient" cdrole="application" arity="2">
    <title>Quotient</title>
    <name>quotient</name>
    <description>
      <p>quotient is the binary function used to represent the operation of integer
	division.  quotient(a,b) denotes q such that a = b*q+r, with |r| less than |b| and
	a*r non-negative. 
      </p>
    </description>
    <discussion>
      <p>The <code>quotient</code> element is the operator used for division modulo a
      particular base. When the <code>quotient</code> operator is applied to integer arguments
      <var>a</var> and <var>b</var>, the result is the <quote>quotient of <var>a</var>
      divided by <var>b</var></quote>. That is, <code>quotient</code> returns the unique
      integer <var>q</var> such that <var>a</var> = <var>q</var> <var>b</var> +
      <var>r</var>. (In common usage, <var>q</var> is called the quotient and <var>r</var>
      is the remainder.)</p>
    </discussion>
    <classification>function</classification>
    <MMLattribute>
      <attname> type </attname>
      <attvalue>MathMLType</attvalue>
      <attdefault> real </attdefault>
    </MMLattribute>
    <rendering>
      <p>There is no commonly used notation for this concept. Some possible renderings are</p> 
      <ul> 
	<li><p>quotient of <var>a</var> divided by <var>b</var></p></li>
	<li><p>integer part of <var>a</var> / <var>b</var></p></li>
	<li><p><graphic role="inline" source="image/f4027.gif" alt="n!"/></p></li>
	<li><p><graphic role="inline" source="image/f4026.gif" alt="\lfloor a/b \rfloor"/></p></li>
      </ul>
    </rendering>
    <optype>binary arithmetic operator</optype>
    <signature> (integer, integer) -> integer </signature>
    <property>
      <description>
	<p>ForAll( [a,b], b != 0, a = b*quotient(a,b) + rem(a,b) )</p>
	</description><![CDATA[<apply><forall/>
  <bvar><ci>a</ci></bvar>
  <bvar><ci>b</ci></bvar>
  <condition><apply><neq/><ci>b</ci><cn>0</cn></apply></condition>
  <apply><eq/>
    <ci>a</ci>
    <apply><plus/>
      <apply><times/>
          <ci>b</ci>
          <apply><quotient/><ci>a</ci><ci>b</ci></apply>
      </apply>
      <apply><rem/><ci>a</ci><ci>b</ci></apply>
    </apply>
  </apply>
</apply>]]></property>
        <MMLexample>
	  <description><p>Various mathematical applications will use this data in
	  different ways. Editing applications might choose an image such as shown below,
	  while a computationally based application would evaluate it to 2
	  when<var>a</var>=13 and <var>b</var>=5.</p>
	  </description>
	  <![CDATA[<apply><quotient/> <ci> a </ci> <ci> b </ci> </apply> ]]>
	</MMLexample>
        <MMLexample><![CDATA[<apply>
  <quotient/>
  <cn>5</cn>
  <cn>4</cn>
</apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_factorial"  cdrole="application" arity="1">
	<title>Factorial</title>
        <name>factorial</name>
        <description>
          <p>This is the unary operator used to construct factorials.  Factorials are
          defined by n! = n*(n-1)* ... * 1</p>
        </description>
	<classification>function</classification>
	<optype>unary arithmetic operator</optype>
        <signature>(algebraic) -> algebraic</signature>
        <signature>(integer) -> integer</signature>
        <property>
          <description>
            <p>ForAll( n, n \gt 0, n! = n*(n-1)! )</p></description><![CDATA[
<apply><forall/>
  <bvar><ci>n</ci></bvar>
  <condition><apply><gt/><ci>n</ci><cn>0</cn></apply></condition>
  <apply><eq/>
    <apply><factorial/><ci>n</ci></apply>
    <apply><times/>
      <ci>n</ci>
      <apply><factorial/>
        <apply><minus/><ci>n</ci><cn>1</cn></apply>
      </apply>
    </apply>
  </apply>
</apply>
]]></property>
        <property>
          <description>
            <p>0! = 1</p></description><![CDATA[
<apply>]]>&lt;eq/&gt;<![CDATA[
  <apply><factorial/><cn>0</cn></apply>
  <cn>1</cn>
</apply>
]]></property>

	    <MMLexample>
	      <description><p>If this were evaluated at <var>n</var> = 5 it would evaluate to 120.</p>
	      </description>
	    <![CDATA[<apply><factorial/><ci>n</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_rem"  cdrole="application" arity="2">
	<title>Remainder</title>
        <name>rem</name>
        <description>
          <p>This is the binary operator used to represent the integer remainder a mod b.
          For arguments a and b, such that a = b*q + r with |r| &lt; |b| it represents the
          value r.</p>
        </description>
	<discussion>
	  <p>The <code>rem</code> element is the operator that returns the
	  <quote>remainder</quote> of a division modulo a particular base. When the
	  <code>rem</code> operator is applied to integer arguments <var>a</var> and
	  <var>b</var>, the result is the <quote>remainder of <var>a</var> divided by
	  <var>b</var></quote>. That is, <code>rem</code> returns the unique integer,
	  <var>r</var> such that <var>a</var> = <var>q</var> <var>b</var>+ <var>r</var>,
	  where <var>r</var> &lt; <var>q</var>. (In common usage, <var>q</var> is called
	  the quotient and <var>r</var> is the remainder.)</p>
	</discussion>
        <classification>function</classification>
        <MMLattribute>
          <attname>type</attname>
          <attvalue>MathMLType</attvalue>
          <attdefault>integer</attdefault>
        </MMLattribute>
	<rendering><p>
	  <graphic role = "inline" source = "image/f4035.gif" alt = "a \mod b"/></p>
	</rendering>
	<optype>binary arithmetic operator</optype>
        <signature> (integer, integer) -> integer </signature>
        <signature>[type=MathMLtype](MathMLtype,MathMLtype) -> MathMLtype</signature>
        <property>
          <description>
            <p>rem(a, 0) is undefined</p>
          </description>
        </property>
        <property>
          <description>
            <p>ForAll( [a,b], b!=0, a = b*quotient(a,b) + rem(a,b))</p>
          </description><![CDATA[
<apply><forall/>
  <bvar><ci>a</ci></bvar>
  <bvar><ci>b</ci></bvar>
  <condition><apply><neq/><ci>b</ci><cn>0</cn></apply></condition>
  <apply><eq/>
    <ci>a</ci>
    <apply><plus/>
      <apply><times/>
        <ci>b</ci>
  <apply><quotient/><ci>a</ci><ci>b</ci></apply>
      </apply>
    <apply><rem/>
    <ci>a</ci>
    <ci>b</ci>
  </apply>
</apply>
]]>&lt;/apply&gt;<![CDATA[
</apply>
]]></property>
        <MMLexample>
		<description><p>If this were evaluated at <var>a</var> = 15 and <var>b</var> = 8 it would yield 7.</p>
		</description>
		<![CDATA[<apply><rem/><ci> a </ci><ci> b </ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_factorof" cdrole="application" arity="2">
        <name>factorof</name>
        <description>
          <p>This is the binary MathML operator that is used indicate the mathematical
          relationship a "is a factor of" b. This relationship is true just if b mod a =
          0</p>
        </description>
	<discussion>
	  <p>The <el>factorof</el> element is the relational operator element on two
	  integers <var>a</var> and <var>b</var> specifying whether one is an integer
	  factor of the other.</p>
	</discussion>
        <classification>function</classification>
        <MMLattribute>
          <attname> type </attname>
          <attvalue> MathMLType </attvalue>
          <attdefault> integer </attdefault>
        </MMLattribute>
	<rendering>
	  <graphic role="display" source="image/new-factorof.gif" alt="a | b"/>
	</rendering>
	<optype>binary relation</optype>
        <signature> (integer, integer) -> boolean</signature>
        <property>
          <description>
            <p>ForAll( [a,b], a and b integers, a divides b  if there is an integer c such that a*c = b )</p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><factorof/>
  <ci> a </ci>
  <ci> b </ci>
</apply>]]></MMLexample>
      </MMLdefinition>

</mcd>
