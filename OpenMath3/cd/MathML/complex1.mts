<?xml version="1.0" encoding="utf-8"?>
<mcd>

      <MMLdefinition id="cds_real"  cdrole="application" arity="1">
	<title>Real Part</title>
        <name>real</name>
        <description>
          <p>A unary operator used to construct an expression
representing the "real" part of a complex number. </p>
        </description>
	<discussion>
	  <p>The <code>real</code> operator (introduced in MathML 2.0) gives the real part of
	  a complex number, that is the x component in <var>x</var> + i <var>y</var></p>
	</discussion>
        <classification>function</classification>
        <MMLattribute>
          <attname>type</attname>
          <attvalue>MathMLType</attvalue>
          <attdefault>real</attdefault>
        </MMLattribute>
	<rendering>
	  <graphic source="image/f4051.gif" alt="\Re(x + \ii y)"/>
	</rendering>
	<optype>unary arithmetic operator</optype>
        <signature>(complex) -> real</signature>
        <property>
          <description>
            <p>ForAll( [x,y], x in R, Y in R, real(x+i*y)=x) )</p>
          </description><![CDATA[
<apply><forall/>
  <bvar><ci>x</ci></bvar>
  <bvar><ci>y</ci></bvar>
  <condition>
    <apply><and/>
      <apply><in/><ci>x</ci><reals/></apply>
      <apply><in/><ci>y</ci><reals/></apply>
    </apply>
  </condition>
  <apply><eq/>
    <apply><real/>
      <apply><plus/>
        <ci> x </ci>
        <apply><times/><imaginaryi/><ci>y</ci></apply>
      </apply>
    </apply>
    <ci> x </ci>
  </apply>
</apply>
]]></property>
        <MMLexample>
		<description><p>The following example encodes the real operation on<var>x</var> + i<var>y</var>.A MathML-aware evaluation system would return the <var>x</var> component, suitably encoded.</p></description>
		<![CDATA[
<apply><real/>
  <apply><plus/>
    <ci> x </ci>
    <apply><times/><imaginaryi/><ci>y</ci></apply>
  </apply>
</apply>
]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_imaginary"  cdrole="application" arity="1">
	<title>Imaginary Part</title>
        <name>imaginary</name>
        <description>
          <p>The unary function used to construct an expression which represents the
          imaginary part of a complex number.  </p>
        </description>
	<discussion>
	  <p>The <code>imaginary</code> operator (introduced in MathML 2.0)
	  gives the imaginary part of a complex number, that is, the y
	  component in <var>x</var> + i <var>y</var>.</p>
	</discussion>
        <classification>function</classification>
        <MMLattribute>
          <attname>type</attname>
          <attvalue>MathMLType</attvalue>
          <attdefault>real</attdefault>
        </MMLattribute>
	<rendering>
	  <p><graphic role = "inline" source = "image/new-floor.gif" alt = "\lfloor{a}\rfloor"/></p>
	  <p><graphic source = "image/f4052.gif" alt = "\Im(x + \ii y)"/></p>
	</rendering>
	<optype>unary arithmetic operator</optype>
	<signature>(complex) -> real</signature>
        <property>
          <description>
            <p>ForAll( [x,y], Imaginary(x + i*y) = y )</p>
          </description><![CDATA[
<apply><forall/>
  <bvar><ci type="real"> x </ci></bvar>
  <bvar><ci type="real"> y </ci></bvar>
  <apply><eq/>
    <apply><imaginary/>
      <apply><plus/>
        <ci type="real"> x </ci>
        <apply><times/><imaginaryi/><ci>y</ci></apply>
      </apply>
    </apply>
    <ci type="real"> y </ci>
  </apply>
</apply>
]]></property>
        <MMLexample>
		<description><p>The following example encodes the imaginary operation on <var>x</var> + i<var>y</var>.A MathML-aware evaluation system would return the <var>y</var> component, suitably encoded.</p></description>
		<![CDATA[<apply><imaginary/>
  <apply><plus/>
    <ci> x </ci>
    <apply><times/><imaginaryi/><ci>y</ci></apply>
  </apply>
</apply>
]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_conjugate" cdrole="application" arity="1">
	<title>Complex Conjugate</title>
        <name>conjugate</name>
        <description>
          <p>The unary "conjugate" arithmetic operator is used to represent the complex
          conjugate of its argument.</p>
        </description>
	<discussion>
	  <p>The <code>conjugate</code> element represents the complex conjugate of a complex quantity.</p>
	</discussion>
        <classification>function</classification>
	<rendering>
	  <graphic role="display" source="image/f4049.gif" alt="\overline{x + \ii y}"/>
	</rendering>
	<optype>unary arithmetic operator</optype>
        <signature> (algebraic) -> algebraic </signature>
        <signature>(complex) -> complex</signature>
        <MMLexample>
	  <description>
	    <p>The following example encodes the conjugate of <var>x</var> + i<var>y</var>.</p>
	  </description>
	  <![CDATA[<apply><conjugate/>
 <apply><plus/>
    <ci> x </ci>
    <apply><times/>
      <cn> &ImaginaryI; </cn>
    <ci> y </ci>
    </apply>
  </apply>
</apply>
]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_arg"  cdrole="application" arity="1">
	<title>Argument</title>
        <name>arg</name>
        <description>
          <p>The unary "arg" operator is used to construct 
an  expression which represents the
"argument" of a complex number.</p>
        </description>
	<discussion>
	  <p>The <code>arg</code> operator gives the <quote>argument</quote> of a complex
	  number, which is the angle (in radians) it makes with the positive real
	  axis. Real negative numbers have argument equal to + <graphic role="inline"
	  source="image/f4003.gif" alt="\pi"/>.</p> 
	</discussion>
        <classification>function</classification>
        <MMLattribute>
          <attname>type</attname>
          <attvalue>MathMLType</attvalue>
          <attdefault>real</attdefault>
        </MMLattribute>
	<rendering>
	  <graphic source="image/f4050.gif" alt="\arg(x + \ii y)"/>
	</rendering>
	<optype>unary arithmetic operator</optype>
        <signature>(complex) -> real</signature>
        <MMLexample>
		<description><p>The following example encodes the argument operation on<var>x</var> + i<var>y</var>.</p></description>
		<![CDATA[<apply><arg/>
  <apply><plus/>
    <ci> x </ci>
    <apply><times/><imaginaryi/><ci>y</ci></apply>
  </apply>
</apply>
]]></MMLexample>
      </MMLdefinition>

      

</mcd>
