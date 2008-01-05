<?xml version="1.0" encoding="utf-8"?>
<mcd>

      <MMLdefinition id="cds_floor"  cdrole="application" arity="1">
	<title>Floor</title>
        <name>floor</name>
        <description>
          <p>The floor element is used to denote the round-down (towards -infinity) operator.</p>
        </description>
	<discussion>
	  <p>The <code>floor</code> element (introduced in MathML 2.0) is used to denote the
	  round-down (towards -infinity) operator.</p>
	</discussion>
        <classification>function</classification>
        <MMLattribute>
          <attname>type</attname>
          <attvalue>MathMLType</attvalue>
          <attdefault>integer</attdefault>
        </MMLattribute>
	<rendering><p>
	  <graphic role = "inline" source = "image/new-floor.gif" alt = "\lfloor{a}\rfloor"/></p>
	</rendering>
	<optype>unary arithmetic operator</optype>
        <signature> (real) -> integer</signature>
        <signature> [type=MathMLtype](algebraic) -> algebraic</signature>
        <property>
          <description>
            <p>ForAll( x, floor(x) &lt;= x )</p>
          </description><![CDATA[<apply><forall/>
  <bvar><ci>x</ci></bvar>
  <apply><leq/>
    <apply><floor/>
      <ci>x</ci>
    </apply>
    <ci>x</ci>
  </apply>
</apply>]]></property>
        <MMLexample>
		<description><p>If this were evaluated at <var>a</var> = 15.015, it would yield 15.</p>
		</description>
		<![CDATA[<apply> <floor/>
  <ci> a </ci>
</apply>]]></MMLexample>
		<MMLexample><![CDATA[
		<apply> <forall/>
		  <bvar><ci> a </ci></bvar>
		  <apply><and/>
		    <apply><leq/>
		    <apply><floor/>
		    <ci>a</ci>
		    </apply>
		    <ci>a</ci>
		  </apply>    
		    <apply><lt/>
		      <ci>a</ci>
		    <apply><plus/>
		      <apply><floor/>
		      <ci>a</ci>
		    </apply>
		    <cn>1</cn>
		    </apply>
		  </apply>
		  </apply>
		</apply>
		]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_ceiling"  cdrole="application" arity="1">
	<title>Ceiling</title>
        <name>ceiling</name>
        <description>
          <p>The ceiling element is used to denote the round-up (towards +infinity) operator.</p>
        </description>
	<discussion>
	  <p>The <code>ceiling</code> element (introduced in MathML 2.0) is used
	  to denote the round-up (towards +infinity) operator.</p>
	</discussion>
        <classification>function</classification>
        <MMLattribute>
          <attname>type</attname>
          <attvalue>MathMLType</attvalue>
          <attdefault>integer</attdefault>
        </MMLattribute>
	<rendering><p>
	  <graphic role = "inline" source = "image/new-ceiling.gif" alt = "\lceil{a}\rceil"/></p>
	</rendering>
	<optype>unary operator</optype>
        <signature> (real) -> integer</signature>
        <signature> [type=MathMLtype](algebraic) -> algebraic</signature>
        <property>
          <description>
            <p>ForAll( x, ceiling(x) &gt;= x )</p>
          </description><![CDATA[<apply><forall/>
  <bvar><ci>x</ci></bvar>
  <apply><geq/>
    <apply><ceiling/>
      <ci>x</ci>
    </apply>
    <ci>x</ci>
  </apply>
</apply>]]></property>
        <MMLexample>
		<description><p>If this were evaluated at <var>a</var> = 15.015, it would yield 16.</p></description>
		<![CDATA[<apply> <ceiling/>
  <ci> a </ci>
</apply>]]></MMLexample>
		<MMLexample><![CDATA[
		<apply> <forall/>
		  <bvar><ci> a </ci></bvar>
		  <apply><and/>
		    <apply><lt/>
		    <apply><minus/>
		      <apply><ceiling/>
		      <ci>a</ci>
		    </apply>
		    <cn>1</cn>
		    </apply>
		      <ci>a</ci>
		  </apply>
		    <apply><leq/>
		    <ci>a</ci>
		    <apply><ceiling/>
		    <ci>a</ci>
		    </apply>
		  </apply>    
		  </apply>
		</apply>
		]]></MMLexample>
      </MMLdefinition>

</mcd>
