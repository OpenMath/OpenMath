<?xml version="1.0" encoding="utf-8"?>
<mcd>
  <MMLdefinition id="cds_int"  cdrole="application" arity="1">
    <name>int</name>
    <description>
      <p>The indefinite integral of a function.</p>
    </description>
    <discussion>
      <p>The <el>int</el> element is the operator element for an integral.</p>
    </discussion>

    <classification>function</classification>
    <rendering>
      <graphic source="image/f4061a.gif" role="display" alt="\int\sin = \cos"/>
    </rendering>
    <signature> (function) -> function </signature>
    <MMLexample>
      <description><p>The integral over the sine function is cosine function.</p></description>
<![CDATA[<apply><eq/><apply><int/><sin/></apply><cos/></apply>]]>
    </MMLexample>
  </MMLdefinition>

  <MMLdefinition id="cds_defint"  cdrole="application" arity="2">
    <name>defint</name>
    <description>
      <p>The definite integral of a function with upper and lower bounds.</p>
    </description>
    <classification>function</classification>
    <rendering>
      <graphic role="display" source="image/f4062.gif" alt="\int_a^b \cos"/>
    </rendering>
    
    <signature>(number,number,function) -> function</signature>
    <MMLexample>
      <description><p>This example specifies an interval of the real line as the domain of
      integration with an <el>interval</el> element.  In this form the integrand is
      provided as a function and no mention is made of a bound variable.</p>
      </description>
      <![CDATA[<apply><defint/><ci>a</ci><ci>b</ci><cos/></apply>]]>
    </MMLexample>
  </MMLdefinition>

  <MMLdefinition id="cds_defintset"  cdrole="application" arity="2">
    <name>defintset</name>
    <description>
      <p>The definite integral of a function over a domain of application.</p>
    </description>
    <classification>function</classification>
    <rendering>
      <graphic role="display" source="image/????.gif" alt="\int_S \cos"/>
    </rendering>
    
    <signature>(set,function) -> function</signature>
    <MMLexample>
      <description><p>This example specifies an interval of the real line as the domain of
      integration with an <el>interval</el> element.  In this form the integrand is
      provided as a function and no mention is made of a bound variable.</p>
      </description>
<![CDATA[<apply><defint/><interval><ci>a</ci><ci>b</ci></interval><cos/></apply>]]>
    </MMLexample>
<MMLexample><![CDATA[<apply><defint/><ci type="set">D</ci><ci type="function">f</ci></apply>]]></MMLexample>
  </MMLdefinition>

  <MMLdefinition id="cds__Int"  cdrole="binder">
    <name>intalg</name>
    <description>
      <p>The definite (without <el>condition</el> or indefinite (with) integral of an
      algebraic expression with respect to a bound variable.</p>
    </description>
    <discussion>
      <p>The <el>Int</el> element is the operator element for an integral, bound variables
      serve as the integration variables and definite integrals are indicated by providing
      a domain of integration.</p>
    </discussion>
    
    <classification>function</classification>
    <rendering>
      <graphic role="display" source="image/f4161.gif" alt="\int f(x) \,\diffd x"/>
      <graphic role="display" source="image/f4063.gif" alt="\int_{x \in D} f(x) \,\diffd x"/>
    </rendering>
    
    <signature> (bvar,algebraic) -> algebraic </signature>
    <signature>(bvar+,domainofapp,algebraic) -> algebraic</signature>
    <MMLexample>
      <description><p>This example specifies an interval of the real line as the domain of
      integration with an <el>interval</el> element.  In this form the integrand is
      provided as a function and no mention is made of a bound variable..</p>
      </description>
<![CDATA[<apply><Int/>
 <interval><ci>a</ci><ci>b</ci></interval>
 <cos/>
 </apply>]]>
    </MMLexample>

    <MMLexample>
      <description>
	<p>This example specifies the integrand using an expression involving a bound
	variable and an interval </p>
      </description>
<![CDATA[<bind><Int/>
  <bvar><ci>x</ci></bvar>
  <domainofapplication><apply><interval/><ci>a</ci><ci>b</ci></apply></domainofapplication>
  <apply><cos/><ci>x</ci></apply>
</bind>]]>
    </MMLexample>

   <p>The final example specifies the domain of integration with a bound variable and a
    <el>condition</el> element.</p>

    <MMLexample>
<![CDATA[<bind><Int/>
  <bvar><ci> x </ci></bvar>
  <condition><apply><in/><ci>x</ci><ci type="set">D</ci></apply></condition>
  <apply><ci type="function">f</ci><ci>x</ci></apply>
</bind>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_diff"  cdrole="application" arity="1">
        <name>diff</name>
        <description>
	  <p>The <el>diff</el> element is the differentiation operator element for
	  functions of a single variable.</p>
	</description>
	<discussion>
	  <p> <el>diff</el> is applied directly to an actual function such as sine or
	  cosine, thereby denoting a function which is the derivative of the original
	  function, as in

	  <eg role = "mathml"><![CDATA[<apply><diff/><ci type="function>f</ci></apply>]]></eg>
	  
	  If <el>diff</el> is given a number <var>n</var> as a second argument, then it is
	  interpreted as a <var>n</var>-fold differentiation operator.
	  
	  <eg role = "mathml"><![CDATA[<apply><ndiff/><cn>2</cn><ci type="function>f</ci></apply>]]></eg></p>
	</discussion>
	<classification>function</classification>
        <rendering>
	  <graphic role="display" source="image/newdiff.gif" alt="f\,'"/>
	  <graphic role="display" source="image/f4064.gif" alt="\frac{\diffd f(x)}{\diffdx}"/>
	  <graphic role="display" source="????" alt="\frac{\diffd^n f(x)}{\diffdx}"/>
	</rendering>
        <signature> function -> function </signature>
	<MMLexample>
          <description>
            <p>diff(sin) = cos</p>
          </description>
	<![CDATA[<apply><eq/><apply><diff/><sin/></apply><cos/></apply>]]></MMLexample>
	<MMLexample>
          <description><p>diff (2,sin) = sin</p></description>
	<![CDATA[<apply><eq/><apply><ndiff/><cn>2</cn><sin/></apply><sin/></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds__Diff"  cdrole="binder" diff="add">
        <name>Diff</name>
        <description>
          <p><el>Diff</el> is the algebraic differentiation operator. </p>
	</description>
	<discussion>
	  <issue role="open" tracker="10" id="algebraic_diff">
	    <head>Algebraic differentiation operator</head>
	    <p>In the <el>diff</el> operator, we used a <el>bvar</el> schema to specify
	    the bound variables. But in the new canonical MathML, we only allow
	    <el>bvar</el> in <el>bind</el> (which carries the expectation of
	    alpha-equivalence). Thus we cannot make algebraic <el>diff</el> a binding
	    operator, and have to pass the differentiation variable as a regular argument
	    (i.e. no <el>bvar</el></p>
	    <p>For seeing how things work out in the concert of things, I have added an
	    <el>Diff</el> symbol to the content dictionary <code>calculus_veccalc</code>
	    for algebraic differentiation. Have a look, how it works.</p>
	  </issue>

	  <p><el>Diff</el> is the binding operator for operator takes two (or three)
	  arguments: an expression involving a single variable such as sin(<var>x</var>),
	  or cos(<var>x</var>) or a polynomial in <var>x</var> and the variable modulo
	  which the derivative is being taken. For instance:
	  
	  <eg role = "mathml"><![CDATA[<bind><Diff/>
  <bvar><ci>x</ci></bvar>
  <apply><ci>f</ci><ci>x</ci></apply><ci>x</ci>
</bind>]]></eg>
	  
	  If <el>Diff</el> is given a number <var>n</var> as a third argument, then it
	  is interpreted as a <var>n</var>-fold algebraic differentiation operator.
	  
	  <issue role="open" tracker="10" id="algebraic_ndiff">
	    <head>nfold algebraic differentiation</head>
	    <p>I have some trouble representing the iterated differentiation operator. I
	    actually think that the degree should be something that is a parameter to the
	    binding operator, so the following would be the most natural representation. 

<eg role = "mathml"><![CDATA[<bind>
  <apply><Diff/><cn>3</cn></apply>
  <bvar><ci>x</ci></bvar>
  <apply><ci>f</ci><ci>x</ci></apply>
</apply>]]></eg>

But this messes up the <code>cdrole</code> classification in OpenMath. Rather than a
binder, the <el>Diff</el> operator is now of role application, but <var>Diff(3)</var> is
of role binder. I do not see any way around introducing more complex roles (or relegating
the role checking to the type systym e.g. STS.). I am pretty sure that this problem will
also appear somewhere else. Maybe we can re-interpret the role <code>binding</code> as
"has to be at the head of an application of a <el>bind</el> object. This might actually
work, let's keep our fingers crossed that we will not come into even more complex
representational situations.
</p>
	  </issue>
	  </p>
	</discussion>

        <classification>binding constructor</classification>
	<rendering>
	  <graphic role="display" source="image/f4064.gif" alt="\frac{\diffd f(x)}{\diffdx}"/>
	</rendering>
        <signature> (var,algebraic)  -> algebraic </signature>
        <property>
          <description>
            <p>ForAll( [x,n], n!=0, diff( x^n , x ) = n*x^(n-1) )</p>
          </description>
        </property>

        <MMLexample>
          <description>
            <p>diff( sin(x) , x ) = cos</p>
          </description>
<![CDATA[<apply><eq/>
  <bind><Diff/>
    <bvar><ci>x</ci></bvar>
    <apply><sin/><ci>x</ci></apply>
  </bind>
  <apply><cos/><ci>x</ci></apply>
</apply>]]></MMLexample>

        <MMLexample>
          <description>
            <p>Diff(x^2,x)</p>
          </description>
<![CDATA[<apply><Diff/>
  <apply><power/><ci>x</ci><cn>2</cn></apply>
  <ci>x</ci>
</apply>]]></MMLexample>

	  <MMLexample>
          <description>
            <p>Diff(f(x),x)</p>
	    <p> The derivative with respect to <var>x</var> of an expression in
	    <var>x</var> such as <emph>f (x)</emph> can be written as:</p>
          </description>
<![CDATA[<apply><Diff/>
  <apply><ci type="function">f</ci><ci>x</ci></apply>
  <ci>x</ci>
</apply>]]></MMLexample>

        <MMLexample>
          <description>
            <p>anDiff( sin(x) , x, 2) = sin(x)</p>
          </description>
<![CDATA[<apply><eq/>
  <apply><Diff/>
    <apply><sin/><ci>x</ci></apply>
    <ci>x</ci>
    <cn>2</cn>
  </apply>
  <apply><sin/><ci>x</ci></apply>
</apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_partialdiff"  cdrole="application" arity="nary">
        <name>partialdiff</name>
        <description>
          <p>This symbol is used to express partial differentiation.  It occurs in two
          forms: one form corresponding to the differentiation of algebraic expressions
          (often displayed using the Leibnitz notation), and the other to express partial
          derivatives of actual functions (often expressed as $D_{1,2} f $ )</p>

	  <p>For the first form, the arguments are the bound variables followed by the
	  algebraic expression.  The result is an algebraic expression.  Repetitions of
	  the bound variables are indicated using the degree element.  The total degree is
	  indicated by use of a degree element at the top level.</p>

          <p>For the second form, there are two arguments: a list of indices indicating by
          position which coordinates are involved in constructing the partial derivatives,
          and the actual function.  The coordinates may be repeated.</p>
        </description>
	<discussion>
	  <p>The <el>partialdiff</el> element is the partial differentiation operator
	  element for functions or algebraic expressions in several variables. </p>

	  <p>In the case of algebraic expressions, the bound variables are given by
	  <el>bvar</el> elements, which are children of the containing <el>apply</el>
	  element. The <el>bvar</el> elements may also contain <el>degree</el> element,
	  which specify the order of the partial derivative to be taken in that
	  variable.</p>

	  <p>For the expression case the actual variable is designated by a <el>bvar</el>
	  element that is a child of the containing <el>apply</el> element. The
	  <el>bvar</el> elements may also contain a <el>degree</el> element, which
	  specifies the order of the derivative to be taken.</p>

	  <p>Where a total degree of differentiation must be specified, this is indicated
	  by use of a <el>degree</el> element at the top level, i.e. without any
	  associated <el>bvar</el>, as a child of the containing <el>apply</el>
	  element.</p>

	  <p>For the case of partial differentiation of a function, the containing
	  <el>apply</el> takes two child elements: firstly a list of indices indicating by
	  position which coordinates are involved in constructing the partial derivatives,
	  and secondly the actual function to be partially differentiated.  The
	  coordinates may be repeated.</p>

	  <p>The <el>partialdiff</el> operator accepts zero or more <el>bvar</el>
	  schemata, and an optional <el>degree</el> qualifier schema. The <el>bvar</el>
	  schema specify, in order, the variables with respect to which the derivative is
	  being taken. Each <el>bvar</el> element may contain a <el>degree</el> schema
	  which is used to specify the order of the derivative being taken with respect to
	  that variable. The optional <el>degree</el> schema qualifier associated with the
	  <el>partialdiff</el> element itself (that is, appearing as a child of the
	  enclosing <el>apply</el> element rather than of one of the <el>bvar</el>
	  qualifiers) is used to represent the total degree of the differentiation. Each
	  <el>degree</el> schema used with <el>partialdiff</el> is expected to contain a
	  single child schema. For example,

<eg role = "mathml"><![CDATA[<bind><partialdiff/>
  <bvar>
    <degree><cn>2</cn></degree>
    <ci>x</ci>
  </bvar>
  <bvar><ci>y</ci></bvar>
  <bvar><ci>x</ci></bvar>
  <degree><cn>4</cn></degree>
  <ci type="function">f</ci>
</apply>]]></eg>

            denotes the mixed partial derivative ( d<sup>4</sup> / d<sup>2</sup><var>x</var>
	  d<var>y</var> d<var>x</var> ) <var>f</var>.</p>
	</discussion>
        <classification>function</classification>
        <MMLattribute>
          <attname>type</attname>
          <attvalue>function | algebraic </attvalue>
          <attdefault>algebraic</attdefault>
        </MMLattribute>
	<rendering>
	  <graphic role="display" source="image/newpdiff.gif" 
		   alt="\left( \frac{\partial ^{k}}{\partial x^{m}\,\partial y^{n}}\right) f(x,y)"/>
	  <graphic role="display" source="image/newpdiff2.gif" 
		   alt = "\frac{\partial ^{2}}{\partial x\,\partial y}f(x,y)"/>
	  <graphic role="display" source="image/newpdiff3.gif" alt="D_{1,1,3}(f)"/>
	</rendering>
	<signature> (bvar+,degree?,algebraic) -> algebraic </signature>
        <signature>(vector,function) -> function </signature>
        <property>
          <description>
            <p>ForAll( [x,y], partialdiff( x * y , x ) = partialdiff(x,x)*y + partialdiff(y,x)*x )</p>
          </description><![CDATA[ ]]></property>
        <property>
          <description>
            <p>ForAll( [x,a,b], partialdiff( a + b , x ) = partialdiff(a,x) + partialdiff(b,x) )</p>
          </description><![CDATA[ ]]></property>
        <MMLexample>
          <description>
            <p>d^k/(dx^m dy^n) f(x,y)</p>
          </description>
	  <![CDATA[<apply><partialdiff/>
  <bvar><ci> x </ci><degree><ci>m</ci></degree></bvar>
  <bvar><ci> y </ci><degree><ci>n</ci></degree></bvar>
  <degree><ci>k</ci></degree>
  <apply><ci type="function">f</ci><ci>x</ci><ci>y</ci></apply>
</apply>]]></MMLexample>

        <MMLexample>
          <description>
            <p>d^2/(dx dy) f(x,y)</p>
          </description>
	  <![CDATA[<apply><partialdiff/>
  <bvar><ci>x</ci></bvar>
  <bvar><ci>y</ci></bvar>
  <apply><ci type="function">f</ci><ci>x</ci><ci>y</ci></apply>
</apply>]]></MMLexample>

        <MMLexample>
          <description>
            <p>D_{1,1,3}(f) </p>
          </description>
	  <![CDATA[<apply><partialdiff/>
  <list><cn>1</cn><cn>1</cn><cn>3</cn></list>
  <ci type="function">f</ci>
</apply>]]></MMLexample>
      </MMLdefinition>
      

</mcd>
