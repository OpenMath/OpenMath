<?xml version="1.0" encoding="utf-8"?>
<mcd>
      <MMLdefinition id="cds_max"  cdrole="application" arity="nary">
	<title>Maximum</title>
        <name>max</name>
        <description>
	  <p>This is the n-ary operator used to represent the maximum of a set of
	  elements. The elements may be listed explicitly or they may be described by a
	  <code>domainofapplication</code>, for example, the maximum over all x in the set A. The
	  <code>domainofapplication</code> is often abbreviated by placing a condition directly on a
	  bound variable.</p>

	<p>The <code>max</code> operator is a n-ary operators may use the domain of
	application qualifiers as described in <specref ref="contm_naryopwithqual"/>.  For
	example, the <code>min</code> and <code>max</code> functions accept a <code>bvar</code> schema
	in cases where the maximum or minimum is being taken over a set of values
	specified by a <code>condition</code> schema together with an expression to be
	evaluated on that set.  In MathML1.0, the <code>bvar</code> element was optional when
	using a <code>condition</code>; if a <code>condition</code> element containing a single
	variable was given by itself following a <code>min</code> or <code>max</code> operator,
	the variable was implicitly assumed to be bound, and the expression to be
	maximized or minimized (if absent) was assumed to be the single bound variable.
	This usage is <intref ref="interf_deprec">deprecated</intref> in MathML 2.0 in
	favor of explicitly stating the bound variable(s) and the expression to be
	maximized or minimized in all cases.</p>

	<p>The <code>min</code> and <code>max</code> elements may also be applied to a list of
	values in which case no qualifier schemata are used.</p>
        </description>
	<classification> function </classification>
        <MMLattribute>
          <attname>type</attname>
          <attvalue>MathMLType</attvalue>
          <attdefault>real</attdefault>
        </MMLattribute>
	<rendering>
	  <ul>
	    <li><p><graphic role="inline" source="image/f4029.gif" alt="\max\{a,b\}"/></p></li>
	    <li><p><graphic role="inline" source="image/f4031.gif" alt="\max\{\,x\in B\land x\notin C\,\}"/></p></li>
	  </ul>
	</rendering>
	<optype>n-ary associative arithmetic operator</optype>
        <signature> (algebraic*) -> algebraic </signature>
        <signature> (domainofapp,function) -> algebraic </signature>
        <signature> (bvar+,domainofapp,algebraic) -> algebraic </signature>
  <!--
        <signature> (bvar,domainofapplication,anything) -> anything        
  <signature> (bvar,lowlimit,uplimit,anything) -> anything </signature>
  -->
        <property>
          <description>
            <p>ForAll( x in S,  max(y in S,y) \geq x )</p>
          </description>
        </property>
        
		<MMLexample>
          <description>
            <p>Maximum of a finite listing of elements</p>
          </description><![CDATA[
<apply><max/><cn>2</cn><cn>3</cn><cn>5</cn></apply>
]]></MMLexample>
        <MMLexample><description>
            <p>Max(y^3,  y in (0,1)) </p>
          </description>
          <![CDATA[
<apply>
  <max/>
  <bvar><ci>y</ci></bvar>
  <condition>
<apply><in/><ci>y</ci><interval><cn>0</cn><cn>1</cn>
</interval></apply>
  </condition>
  <apply><power/><ci> y</ci><cn>3</cn></apply>
</apply>
]]>
		</MMLexample>
		<MMLexample>
		<description><p>When the objects are to be compared explicitly they are listed as arguments to the function as in:</p>
		</description><![CDATA[
		<apply>
		  <max/>
		  <ci> a </ci>
		  <ci> b </ci>
		</apply>
		]]></MMLexample>
		
		<MMLexample>
		  <description>
		    <p>In MathML1.0, the bound variable and expression to be evaluated
		    (<var>x</var>) could be omitted in the example below: this usage is
		    deprecated in MathML2.0 in favor of explicitly stating the bound
		    variable and expression in all cases: </p>
		  </description>
			<![CDATA[
			<apply>
			  <max/>
			  <bvar><ci>x</ci></bvar>
			  <condition>
			    <apply><and/>
			      <apply><in/><ci>x</ci><ci type="set">B</ci></apply>
			      <apply><notin/><ci>x</ci><ci type="set">C</ci></apply>
			    </apply>
			  </condition>
			  <ci>x</ci>
			</apply>
			]]></MMLexample>
		</MMLdefinition>

      <MMLdefinition id="cds_min"  cdrole="application" arity="nary">
	<title>Minimum</title>
        <name>min</name>
        <description>
          <p>This is the n-ary operator used to represent the minimum of a set of
          elements.  The elements may be listed explicitly or they may be described by a
          <code>condition</code>, e.g., the minimum over all x in the set A.</p>
          <p>The elements must all be comparable if the result is to be well defined.</p>

	<p>The <code>min</code> operator is a are n-ary operators may use the domain of
	application qualifiers as described in <specref ref="contm_naryopwithqual"/>.  For
	example, the <code>min</code> and <code>max</code> functions accept a <code>bvar</code> schema
	in cases where the maximum or minimum is being taken over a set of values
	specified by a <code>condition</code> schema together with an expression to be
	evaluated on that set.  In MathML1.0, the <code>bvar</code> element was optional when
	using a <code>condition</code>; if a <code>condition</code> element containing a single
	variable was given by itself following a <code>min</code> or <code>max</code> operator,
	the variable was implicitly assumed to be bound, and the expression to be
	maximized or minimized (if absent) was assumed to be the single bound variable.
	This usage is <intref ref="interf_deprec">deprecated</intref> in MathML 2.0 in
	favor of explicitly stating the bound variable(s) and the expression to be
	maximized or minimized in all cases.</p>

	<p>The <code>min</code> and <code>max</code> elements may also be applied to a list of
	values in which case no qualifier schemata are used.</p>
	</description>
	<discussion>
	  <p>The element <code>min</code> is used to compare the values of its arguments. It
	  returns the minimum of these values respectively.</p>
	</discussion>
        <classification> function </classification>
        <MMLattribute>
          <attname>type</attname>
          <attvalue>MathMLType</attvalue>
          <attdefault>real</attdefault>
        </MMLattribute>
	<rendering>
	  <ul>
	    <li><p><graphic role="inline" source="image/f4030.gif" alt="\min_{x}\{\,x^{2}\mid x\notin B\,\}"/></p></li>
	  </ul>
	</rendering>
	<optype>n-ary associative arithmetic operator</optype>
        <signature> (algebraic*) -> algebraic </signature>
        <signature> (domainofapp,function) -> algebraic </signature>
        <signature> (bvar+,domainofapp,anything) -> algebraic </signature>
        <!-- <signature> (bvar,domainofapplication,anything) -> ordered_set_element        
  <signature> (bvar,lowlimit,uplimit,anything) -> ordered_set_element </signature>
  -->
  <MMLexample>
          <description>
            <p>
Minimum of a finite listing of elements</p>
          </description><![CDATA[
<apply><min/><cn>2</cn><cn>3</cn><cn>5</cn></apply>
]]></MMLexample>
        <MMLexample>
          <description>
            <p>
min(y^2,  y in (0,1)) </p>
          </description><![CDATA[
<apply>
  <min/>
  <bvar><ci>y</ci></bvar>
  <condition>
    <apply><in/><ci>y</ci><interval><cn>0</cn><cn>1</cn></interval></apply>
  </condition>
  <apply><power/><ci> y</ci><cn>2</cn></apply>
</apply>
]]></MMLexample>
		<MMLexample>
		  <description>
		    <p>The elements to be compared may also be described using bound
		    variables with a <code>condition</code> element and an expression to
		    be minimized, as in:</p>
		    <p>Note that the bound variable must be stated even if it might be
		    implicit in conventional notation. </p>
          </description><![CDATA[<apply>
		  <min/>
		  <bvar><ci>x</ci></bvar>
		  <condition>
		    <apply><notin/><ci> x </ci><ci type="set"> B </ci></apply>
		  </condition>
		  <apply>
		      <power/>
		    <ci> x </ci>
		    <cn> 2 </cn>
		  </apply>
		</apply>]]></MMLexample>
      </MMLdefinition>


</mcd>
